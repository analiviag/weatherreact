import { useState, useEffect } from "react";
import styled from "./App.module.css";
import useInitialCity from "./hooks/useInitialCity";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import Footer from "./components/Footer";

// --- Helper Function to Choose an Image ---
const getBackgroundImage = (condition) => {
  const defaultImage = "/images/default.jpg";
  if (!condition) return defaultImage;

  const lowerCaseCondition = condition.toLowerCase();

  if (
    lowerCaseCondition.includes("sun") ||
    lowerCaseCondition.includes("clear")
  ) {
    return "/images/sunny.jpg";
  }
  if (
    lowerCaseCondition.includes("cloud") ||
    lowerCaseCondition.includes("overcast")
  ) {
    return "/images/default.jpg";
  }
  if (
    lowerCaseCondition.includes("rain") ||
    lowerCaseCondition.includes("drizzle")
  ) {
    return "/images/rain.jpg";
  }
  if (
    lowerCaseCondition.includes("snow") ||
    lowerCaseCondition.includes("sleet") ||
    lowerCaseCondition.includes("blizzard")
  ) {
    return "/images/snow.jpg";
  }
  if (
    lowerCaseCondition.includes("mist") ||
    lowerCaseCondition.includes("fog")
  ) {
    return "/images/fog.jpg";
  }

  return defaultImage;
};

// API configuration for WeatherAPI.com
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  //Get geolocation
  const { initialCity, isLocating } = useInitialCity(apiKey);

  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // --- State for the dynamic background image ---
  const [backgroundImage, setBackgroundImage] = useState(
    getBackgroundImage(null)
  );
  //---State for temp unit--- //
  const [unit, setUnit] = useState("C");

  const handleUnitChange = (selectdUnit) => {
    if (unit !== selectdUnit) {
      setUnit(selectdUnit);
    }
  };

  const fetchData = async (city) => {
    setLoading(true);
    setError("");
    // Don't clear weather data immediately for a smoother transition

    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found. Please try again.");

      const data = await response.json();

      // --- Set the weather data AND the new background image ---
      setWeatherData(data);
      setBackgroundImage(getBackgroundImage(data.current.condition.text));
    } catch (err) {
      setError(err.message);
      setWeatherData(null); // Clear data on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialCity && !isLocating) {
      fetchData(initialCity);
    }
  }, [initialCity, isLocating]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      fetchData(search);
      setSearch("");
    } else {
      setError("Please enter a city name.");
    }
  };

  const appStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 0.5s ease-in-out",
  };

  return (
    <div className={styled.weatherApp} style={appStyle}>
      <div className={styled.weatherAppWrapper}>
        <SearchBar
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        <main>
          {loading && <div className={styled.loadingOverlay}>Loading...</div>}
          {error && <div className={styled.errorMessage}>{error}</div>}

          {/* Only render WeatherDisplay if not loading, no error, and data exists */}
          {!loading && !error && weatherData && (
            <WeatherDisplay
              data={weatherData}
              unit={unit}
              onUnitChange={handleUnitChange}
            />
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

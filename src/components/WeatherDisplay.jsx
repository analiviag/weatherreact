import React from "react";
import Forecast from "./Forecast";
import WeatherIcon from "./WeatherIcon.jsx";
import styled from "./WeatherDisplay.module.css";

function WeatherDisplay({ data, unit, onUnitChange }) {
  if (!data) {
    return null;
  }

  const { current, location, forecast } = data;
  const todayForecast = forecast.forecastday[0];

  const handleUnitSelect = (e, selectdUnit) => {
    e.preventDefault();
    onUnitChange(selectdUnit);
  };

  return (
    <>
      <div>
        <div
          className={`text-center ${styled.weatherInfo} ${styled.animatedCard}`}
        >
          <h1 className={styled.city}>{location.name}</h1>
          <div className={styled.temperatureDisplay}>
            <WeatherIcon condition={current.condition.text} size={64} />
            <strong className={styled.temperature}>
              {Math.round(unit === "C" ? current.temp_c : current.temp_f)}
            </strong>
            <span className={styled.units}>
              <a
                href="#"
                onClick={(e) => handleUnitSelect(e, "C")}
                className={unit === "C" ? styled.active : ""}
              >
                °C
              </a>
              {" |  "}

              <a
                href="#"
                onClick={(e) => handleUnitSelect(e, "F")}
                className={unit === "F" ? styled.active : ""}
              >
                °F
              </a>
            </span>
          </div>
          <div className={styled.condition}>{current.condition.text}</div>
          <div className={styled.dateTime}>
            {new Date(location.localtime).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>

        {/* Grid for other details */}
        <div
          className={`row text-center ${styled.detailsGrid} ${styled.animatedCard}`}
        >
          <div className="col">
            <strong>High</strong>
            <div>
              {Math.round(
                unit === "C"
                  ? todayForecast.day.maxtemp_c
                  : todayForecast.day.maxtemp_f
              )}
              °
            </div>
          </div>
          <div className="col">
            <strong>Low</strong>
            <div>
              {Math.round(
                unit === "C"
                  ? todayForecast.day.mintemp_c
                  : todayForecast.day.mintemp_f
              )}
              °
            </div>
          </div>
          <div className="col">
            <strong>Wind</strong>
            <div>{Math.round(current.wind_kph)} km/h</div>
          </div>
          <div className="col">
            <strong>Humidity</strong>
            <div>{current.humidity}%</div>
          </div>
        </div>

        <hr className="mt-4" />
        <Forecast forecastDays={forecast.forecastday} unit={unit} />
      </div>
    </>
  );
}

export default WeatherDisplay;

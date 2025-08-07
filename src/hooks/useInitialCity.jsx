import React, { useEffect, useState } from "react";

const useInitialCity = (apiKey) => {
  const [initialCity, setInitialCity] = useState(null);
  const [isLocating, setIsLocating] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`
          );
          if (!response.ok) {
            throw new Error("Could not determine location from coordinates.");
          }
          const data = await response.json();
          setInitialCity(data.location.name);
        } catch (err) {
          setError(err.message);
          setInitialCity("Vancouver");
        } finally {
          setIsLocating(false);
        }
      },
      (err) => {
        console.error("Geolocation error:", err);
        setError("Geolocation failed or was denied.");
        setInitialCity("Vancouver");
        setIsLocating(false);
      }
    );
  }, [apiKey]);

  return { initialCity, isLocating, error };
};

export default useInitialCity;

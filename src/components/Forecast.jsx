import React from "react";
import WeatherIcon from "./WeatherIcon.jsx";
import styled from "./Forecast.module.css";

function formatDay(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    timeZone: "UTC",
  });
}

function Forecast({ forecastDays, unit }) {
  return (
    <div
      className={`text-center mt-4 ${styled.weatherForecast} ${styled.animatedCard}`}
    >
      <div className="row">
        {forecastDays.map((day) => (
          <div className="col" key={day.date_epoch}>
            <div className={styled.dayOfWeek}> {formatDay(day.date)}</div>
            <WeatherIcon condition={day.day.condition.text} size={48} />
            <div className={`mt-1 ${styled.minMaxContainer}`}>
              <strong className={styled.maxTemp}>
                {Math.round(
                  unit === "C" ? day.day.maxtemp_c : day.day.maxtemp_f
                )}
                °
              </strong>
              <span className={`ms-2 ${styled.minTemp}`}>
                {Math.round(
                  unit === "C" ? day.day.mintemp_c : day.day.mintemp_f
                )}
                °
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;

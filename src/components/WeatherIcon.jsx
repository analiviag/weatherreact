import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const mapConditionToIcon = (conditionText) => {
  const text = conditionText.toLowerCase();

  if (text.includes("sun") || text.includes("clear")) {
    return "CLEAR_DAY";
  }
  if (text.includes("partly cloudy")) {
    return "PARTLY_CLOUDY_DAY";
  }
  if (text.includes("cloud") || text.includes("overcast")) {
    return "CLOUDY";
  }
  if (text.includes("rain") || text.includes("drizzle")) {
    return "RAIN";
  }
  if (
    text.includes("snow") ||
    text.includes("sleet") ||
    text.includes("blizzard")
  ) {
    return "SNOW";
  }
  if (text.includes("mist") || text.includes("fog")) {
    return "FOG";
  }

  return "CLEAR_DAY"; //Defaults to this
};

function WeatherIcon(props) {
  const iconName = mapConditionToIcon(props.condition);

  return (
    <ReactAnimatedWeather
      icon={iconName}
      color={props.color || "white"}
      size={props.size}
      animate={true}
    />
  );
}

export default WeatherIcon;

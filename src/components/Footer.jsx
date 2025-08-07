import React from "react";
import styled from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styled.signature}>
      This project was coded by{" "}
      <a
        href="https://github.com/analiviag"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Analívia
      </a>{" "}
      and is open-source on{" "}
      <a
        href="https://github.com/analiviag/weatherreact"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      . Data provided by{" "}
      <a
        href="https://www.weatherapi.com/"
        title="Free Weather API"
        target="_blank"
        rel="noopener noreferrer"
      >
        WeatherAPI.com
      </a>
      .
    </footer>
  );
}

export default Footer;

import React, { useState, useEffect } from "react";

import styles from "./WeatherWidget.module.scss";

const apiKey = "c04e607b7c251cab44890f73fc3730f4"; // replace with your own api key if you want

function WeatherWidget() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    try {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=Krakow,pl&units=metric&appid=${apiKey}`
      )
        .then((res) => res.json())
        .then((resp) => setWeather(resp.main));
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  if (!weather) {
    return <>weather widget failed to load</>;
  }

  return (
    <div className={styles.weather} data-testid="weatherWidget">
      <div
        className={styles.temp}
        style={weather.temp > 25 ? { color: "red" } : { color: "green" }}
      >
        {weather.temp}&#176;C
        <div className={styles.tooltip}>I am an example tooltip</div>
      </div>
      <span>Feels like: {weather.feels_like}&#176;C</span> <br />
      <span>Pressure: {weather.pressure}hPa</span>
    </div>
  );
}

export default WeatherWidget;

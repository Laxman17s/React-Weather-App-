import React from "react";
import { useWeather } from "../context/context";

const Input = () => {
  const weather = useWeather();
  // console.log(weather);
  return (
    <>
      <input
        className="input-field"
        value={weather.searchCity}
        placeholder="Search Here"
        onChange={(e) => weather.setSearchCity(e.target.value)}
      />
    </>
  );
};

export default Input;

import "./App.css";
import Input from "./component/Input";
import Button from "./component/Button";
import Card from "./component/Card";
import { useWeather } from "./context/context";
import { useEffect } from "react";

function App() {
  const weather = useWeather();
  //console.log(weather);
  useEffect(() => {
    weather.getWeatherDataForLocationData();
  }, []);
  return (
    <>
      <div className="App">
        <h1>Weather Forecast</h1>
        <Input />
        <Button value="Search" onClick={weather.fetchData} />
        <Card />
        <Button value="Refresh" />
      </div>
    </>
  );
}

export default App;

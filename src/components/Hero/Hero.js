import { useEffect, useState } from "react";
import UseWeather from "../../Hooks/UseWeather/UseWeather";
import MainForecast from "../MainForecast/MainForecast";
import WeatherDetails from "../WeatherDetails/WeatherDetails";

const Hero = () => {
  const [search, setSearch] = useState("");
  const [unit, setUnit] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${
    search || "dhaka"
  }&appid=${process.env.REACT_APP_API_KEY}&units=${unit || "metric"}`;

  const [fetchWeather, weatherInfo, isLoading] = UseWeather(url);
  // console.log(unit);
  return (
    <section className="container mx-auto">
      <div className="w-wrapper flex justify-between my-5 gap-4">
        <MainForecast
          fetchWeather={fetchWeather}
          setSearch={setSearch}
          search={search}
          weatherInfo={weatherInfo}
          isLoading={isLoading}
        />
        <WeatherDetails
          setUnit={setUnit}
          unit={unit}
          fetchWeather={fetchWeather}
        />
      </div>
    </section>
  );
};

export default Hero;

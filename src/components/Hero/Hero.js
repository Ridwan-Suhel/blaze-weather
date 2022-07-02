import { useState } from "react";
import UseWeather from "../../Hooks/UseWeather/UseWeather";
import MainForecast from "../MainForecast/MainForecast";
import WeatherDetails from "../WeatherDetails/WeatherDetails";

const Hero = () => {
  const [search, setSearch] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [unit, setUnit] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${
    search || "dhaka"
  }&appid=${process.env.REACT_APP_API_KEY}&units=${unit || "metric"}`;

  const [fetchWeather, weatherInfo, isLoading] = UseWeather(url);
  return (
    <section className="container mx-auto">
      <div className="w-wrapper flex justify-between my-5 gap-4">
        <MainForecast
          fetchWeather={fetchWeather}
          setSearch={setSearch}
          search={search}
          weatherInfo={weatherInfo}
          isLoading={isLoading}
          unit={unit}
          timeZone={timeZone}
        />
        <WeatherDetails
          setUnit={setUnit}
          unit={unit}
          fetchWeather={fetchWeather}
          setTimeZone={setTimeZone}
          timeZone={timeZone}
        />
      </div>
    </section>
  );
};

export default Hero;

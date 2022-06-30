import React, { useEffect, useState } from "react";

const UseWeather = (url) => {
  const [fetchWeather, setFetchWeather] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setFetchWeather(data);
          setWeatherInfo(data?.weather[0]);
          console.log(data);
        });
    };
    fetchData();
  }, [url]);

  return [fetchWeather, weatherInfo];
};

export default UseWeather;

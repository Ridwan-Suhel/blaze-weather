import React, { useEffect, useState } from "react";

const UseWeather = (url) => {
  const [fetchWeather, setFetchWeather] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setFetchWeather(data);
          setWeatherInfo(data?.weather[0]);
          setLoading(true);
          console.log(data);
        });
    };
    fetchData();
  }, [url]);

  return [fetchWeather, weatherInfo, isLoading];
};

export default UseWeather;

import { useEffect, useState } from "react";

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
        });
    };
    fetchData();
  }, [url]);

  return [fetchWeather, weatherInfo, isLoading];
};

export default UseWeather;

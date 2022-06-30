import {
  BeakerIcon,
  CloudIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
const MainForecast = () => {
  const [fetchWeather, setFetchWeather] = useState(null);
  const [search, setSearch] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");
  const [localDate, setLocalDate] = useState(0);
  const [timeZone, setTimeZone] = useState(0);

  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const img = fetchWeather?.weather[0];

  // let dt = new Date(fetchWeather.dt * 1000);
  // let sr = new Date(day.sunrise * 1000).toTimeString();
  // let ss = new Date(day.sunset * 1000).toTimeString();

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${
      search || "dhaka"
    }&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

    const fetchData = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setFetchWeather(data);
          setWeatherInfo(data?.weather[0]);
          setLocalDate(fetchWeather?.dt);
          setTimeZone(fetchWeather?.timezone);
          setLat(fetchWeather?.coord?.lat);
          setLon(fetchWeather?.coord?.lon);
        });
    };
    fetchData();
  }, [
    search,
    fetchWeather?.dt,
    fetchWeather?.timezone,
    fetchWeather?.coord?.lat,
    fetchWeather?.coord?.lon,
  ]);

  console.log(fetchWeather);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let d = new Date(localDate * 1000);
  let dayName = days[d.getDay()];

  let hours = d.getHours();
  let minutes = d.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;

  let descTxt = weatherInfo?.description;
  const desc = descTxt?.charAt(0)?.toUpperCase() + descTxt?.slice(1);

  return (
    <aside className="main-forecast w-1/4 bg-white shadow min-h-screen rounded">
      <div className="form-group flex items-center bg-base-100 px-4 py-1 border-b">
        <SearchCircleIcon className="h-5 w-5 text-slate-500 rotate-[-90deg]" />
        <input
          type="text"
          placeholder="Search Place Here..."
          className=" py-1 px-2 text-lg w-full text-slate-500 focus:outline-none bg-transparent"
          autoFocus={true}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {fetchWeather && (
        <>
          <h2 className="text-center text-lg mt-5 text-rose-600">
            {fetchWeather.message}
          </h2>
          <div className="forecast-detail px-4 overflow-x-hidden">
            <div className="w-img">
              <img
                className="ml-[-45px] mt-[-45px]"
                src={`http://openweathermap.org/img/wn/${weatherInfo?.icon}@4x.png`}
                alt="img"
              />
            </div>

            <h2 className="text-5xl font-light mt-[-15px]">
              {fetchWeather?.main?.temp}&deg;<span className="text-3xl">C</span>
            </h2>

            <h2 className="text-2xl font-normal my-6">
              {dayName},{" "}
              <span className="text-slate-500 font-light">{strTime}</span>
            </h2>

            <div className="more-info text-slate-500">
              <div className="flex items-center gap-3">
                <BeakerIcon className="h-5 w-5" />{" "}
                <span>Feels Like {fetchWeather?.main?.feels_like}&deg;C</span>
              </div>
              <div className="flex items-center gap-3">
                <CloudIcon className="h-5 w-5" />{" "}
                <span>Cloudy - {fetchWeather?.clouds?.all}%</span>
              </div>
            </div>
            <div className="font-light mt-6 bg-black p-5 text-white rounded-lg relative overflow-hidden">
              <h2>
                Weather Information:{" "}
                <span className="text-gray-300">{weatherInfo?.main}</span>
              </h2>
              <h2 className="text-gray-300">{desc}</h2>
              <h2 className="text-xl font-light text-right ">
                {fetchWeather?.name} - <span>{fetchWeather?.sys?.country}</span>
              </h2>
              <img
                src={`http://openweathermap.org/img/wn/${weatherInfo?.icon}@2x.png`}
                alt="img"
                className="absolute top-[-10px] right-[-10px]"
              />
            </div>
          </div>
        </>
      )}
    </aside>
  );
};

export default MainForecast;

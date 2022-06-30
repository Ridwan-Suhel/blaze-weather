import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import DailyCard from "./DailyCard/DailyCard";
import HourlyCard from "./HourlyCard/HourlyCard";

const WeatherDetails = ({ fetchWeather }) => {
  const [toggleState, setToggleState] = useState(true);
  const [dataHourly, setDataHourly] = useState({});
  const [dataDaily, setDataDaily] = useState({});
  const [loading, setLoading] = useState(false);
  const [activeClass, setActiveClass] = useState(true);

  const lat = fetchWeather?.coord?.lat;
  const lon = fetchWeather?.coord?.lon;

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
    const loadData = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((d) => {
          setDataHourly(d.hourly.slice(0, 5));
          setDataDaily(d.daily.slice(0, 5));
          setLoading(true);
        });
    };
    loadData();
  }, [lat, lon]);

  // console.log(dataHourly);
  // console.log(dataDaily);

  return (
    <div className="main-weather-details w-3/4">
      <div className="top-bar flex justify-between items-center pb-4 pt-3">
        <ul className="w-modes  flex justify-between items-center gap-5">
          {/* <li>Today</li> */}
          <button
            onClick={() => {
              setToggleState(true);
              setActiveClass(true);
            }}
            className={`${
              activeClass ? "font-bold border-b-2 border-black" : ""
            } font-light text-lg text-black-900`}
          >
            Today
          </button>
          <button
            onClick={() => {
              setToggleState(false);
              setActiveClass(false);
            }}
            className={` ${
              activeClass ? "" : "font-bold border-b-2 border-black"
            } font-light text-lg text-black-900`}
          >
            Week
          </button>
        </ul>
        <ul className="w-units  flex justify-between items-center gap-5">
          <li>&deg;F</li>
          <li>&deg;C</li>
        </ul>
      </div>

      {loading ? (
        <div className="w-single-card-wrpper grid grid-cols-5 gap-4">
          {toggleState
            ? dataHourly?.map((data) => (
                <HourlyCard key={data.dt} data={data} />
              ))
            : dataDaily?.map((data) => <DailyCard key={data.dt} data={data} />)}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default WeatherDetails;

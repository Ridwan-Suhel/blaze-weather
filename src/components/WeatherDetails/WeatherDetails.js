import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import DailyCard from "./DailyCard/DailyCard";
import HourlyCard from "./HourlyCard/HourlyCard";

import uvi from "../../../src/images/png/001-protection.png";
import wind from "../../../src/images/png/002-wind-turbine.png";
import sunrise from "../../../src/images/png/003-sunrise.png";
import sunset from "../../../src/images/png/004-sea.png";
import humidity from "../../../src/images/png/005-humidity.png";
import pressure from "../../../src/images/png/006-atmospheric.png";
import dew from "../../../src/images/png/dew.png";
import TopBarWea from "./TopBarWea/TopBarWea";
import moment from "moment-timezone";

const WeatherDetails = ({
  fetchWeather,
  setUnit,
  unit,
  setTimeZone,
  timeZone,
}) => {
  const [toggleState, setToggleState] = useState(true);
  const [dataHourly, setDataHourly] = useState({});
  const [dataDaily, setDataDaily] = useState({});
  const [loading, setLoading] = useState(false);
  const [activeClass, setActiveClass] = useState(true);
  const [unitActiveClass, setUnitActiveClass] = useState(true);
  const [isDark, setDark] = useState(true);

  const lat = fetchWeather?.coord?.lat;
  const lon = fetchWeather?.coord?.lon;

  const riseTime = dataDaily[0]?.sunrise;
  const setTime = dataDaily[0]?.sunset;

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${
      process.env.REACT_APP_API_KEY
    }&units=${unit || "metric"}`;
    const loadData = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((d) => {
          setDataHourly(d.hourly.slice(1, 6));
          setDataDaily(d.daily.slice(0, 5));
          setLoading(true);
          setTimeZone(d?.timezone);
        });
    };

    loadData();
  }, [lat, lon, unit, setTimeZone]);

  const darkThemeBoxColor =
    "dark:bg-slate-900 dark:shadow-slate-500 dark:text-slate-300";

  return (
    <div className="main-weather-details md:w-2/4 lg:w-3/4 ">
      <TopBarWea
        unitActiveClass={unitActiveClass}
        setToggleState={setToggleState}
        setUnitActiveClass={setUnitActiveClass}
        setActiveClass={setActiveClass}
        activeClass={activeClass}
        setUnit={setUnit}
        setDark={setDark}
        isDark={isDark}
      />

      <div className="overflow-x-scroll lg:overflow-x-auto">
        {loading ? (
          <div className="w-[800px] lg:w-full gap-4 lg:gap-4 md:gap-1 wea-single-card-wrpper grid grid-cols-5  py-4">
            {toggleState
              ? dataHourly?.map((data) => {
                  if (dataHourly.length > 0) {
                    return (
                      <HourlyCard
                        key={data.dt}
                        data={data}
                        unitActiveClass={unitActiveClass}
                      />
                    );
                  }
                })
              : dataDaily?.map((data) => (
                  <DailyCard
                    key={data.dt}
                    data={data}
                    unitActiveClass={unitActiveClass}
                  />
                ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>

      <div className="highlights-area my-5">
        <h2 className="text-xl font-medium text-black dark:text-slate-300">
          Today's Highlights
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {/* single box  */}
          <div
            className={`border border-slate-500 box p-4 rounded-lg shadow bg-white ${darkThemeBoxColor}`}
          >
            <h2 className="text-lg text-slate-500 font-medium dark:text-slate-300">
              UV Index
            </h2>
            <div className="mt-5 flex items-center gap-2">
              <img
                className="w-[30px] object-cover dark:invert"
                src={uvi}
                alt="Uvi"
              />
              <h2 className="sm:text-3xl text-xl text-slate-900 font-medium dark:text-slate-300">
                {dataDaily[0]?.uvi}
              </h2>
            </div>
          </div>
          {/* single box  */}
          <div
            className={`border border-slate-500 box p-4 rounded-lg shadow bg-white ${darkThemeBoxColor}`}
          >
            <h2 className="text-lg text-slate-500 font-medium dark:text-slate-300">
              Wind Status
            </h2>
            <div className="mt-5 flex items-center gap-2">
              <img
                className="w-[30px] object-cover dark:invert"
                src={wind}
                alt="wind"
              />
              <h2 className="sm:text-3xl text-xl text-slate-900 font-medium dark:text-slate-300">
                {dataDaily[0]?.wind_speed}
                <sub className="text-[14px] text-slate-500">KM/h</sub>
              </h2>
            </div>
          </div>
          {/* single box  */}
          <div
            className={`border border-slate-500 box p-4 rounded-lg shadow bg-white ${darkThemeBoxColor}`}
          >
            <h2 className="text-lg text-slate-500 font-medium dark:text-slate-300">
              Sunrise &amp; Sunset
            </h2>
            <div className="mt-5 flex items-center gap-2">
              <img
                className="w-[30px] object-cover dark:invert"
                src={sunrise}
                alt="sunrise"
              />
              <h2 className="text-xl text-slate-900 font-medium dark:text-slate-300">
                {moment?.unix(riseTime)?.tz(timeZone)?.format("LT")}
              </h2>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <img
                className="w-[30px] object-cover dark:invert"
                src={sunset}
                alt="sunset"
              />
              <h2 className="text-xl text-slate-900 font-medium dark:text-slate-300">
                {moment?.unix(setTime)?.tz(timeZone)?.format("LT")}
              </h2>
            </div>
          </div>
          {/* single box  */}
          <div
            className={`border border-slate-500 box p-4 rounded-lg shadow bg-white ${darkThemeBoxColor}`}
          >
            <h2 className="text-lg text-slate-500 font-medium dark:text-slate-300">
              Humidity
            </h2>
            <div className="mt-5 flex items-center gap-2">
              <img
                className="w-[30px] object-cover dark:invert"
                src={humidity}
                alt="humidity"
              />
              <h2 className="sm:text-3xl text-xl text-slate-900 font-medium dark:text-slate-300">
                {dataDaily[0]?.humidity}
                <span className="text-xl">%</span>
              </h2>
            </div>
          </div>
          {/* single box  */}
          <div
            className={`border border-slate-500 box p-4 rounded-lg shadow bg-white ${darkThemeBoxColor}`}
          >
            <h2 className="text-lg text-slate-500 font-medium dark:text-slate-300">
              Pressure
            </h2>
            <div className="mt-5 flex items-center gap-2">
              <img
                className="w-[30px] object-cover dark:invert"
                src={pressure}
                alt="pressure"
              />
              <h2 className="sm:text-3xl text-xl text-slate-900 font-medium dark:text-slate-300">
                {dataDaily[0]?.pressure}
                <span className="text-xl font-light">hPa</span>
              </h2>
            </div>
          </div>
          {/* single box  */}
          <div
            className={`border border-slate-500 box p-4 rounded-lg shadow bg-white ${darkThemeBoxColor}`}
          >
            <h2 className="text-lg text-slate-500 font-medium dark:text-slate-300">
              Dew Point
            </h2>
            <div className="mt-5 flex items-center gap-2">
              <img
                className="w-[30px] object-cover dark:invert"
                src={dew}
                alt="dew"
              />
              <h2 className="sm:text-3xl text-xl text-slate-900 font-medium dark:text-slate-300">
                {dataDaily[0]?.dew_point}
                <span className="text-xl font-light">KM</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;

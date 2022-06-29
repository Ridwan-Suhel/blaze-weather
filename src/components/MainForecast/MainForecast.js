import {
  BeakerIcon,
  CloudIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";
const MainForecast = () => {
  const [fetchWeather, setFetchWeather] = useState(null);
  const [search, setSearch] = useState("dhaka");

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2199f6775906f518de6705db5a71c1b8`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setFetchWeather(data));
  }, [search]);

  console.log(fetchWeather);

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

      {!fetchWeather ? (
        <p className="text-center text-2xl text-rose-700 mt-5">
          Oops! Nothing Found.
        </p>
      ) : (
        <div className="forecast-detail px-4">
          <div className="w-img">
            <img
              className="w-[150px]"
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="img"
            />
          </div>

          <h2 className="text-5xl font-light mt-6">
            24&deg;<span className="text-3xl">C</span>
          </h2>

          <h2 className="text-2xl font-normal my-6">
            Saturday,{" "}
            <span className="text-slate-500 font-light">12:29 AM</span>
          </h2>

          <div className="more-info text-slate-500">
            <div className="flex items-center gap-3">
              <BeakerIcon className="h-5 w-5" />{" "}
              <span>Feels Like 26&deg;C</span>
            </div>
            <div className="flex items-center gap-3">
              <CloudIcon className="h-5 w-5" /> <span>Cloudy - 20%</span>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default MainForecast;

import React, { useState } from "react";
import DailyCard from "./DailyCard/DailyCard";
import HourlyCard from "./HourlyCard/HourlyCard";

const WeatherDetails = () => {
  const [toggleState, setToggleState] = useState(true);

  return (
    <div className="main-weather-details w-3/4">
      <div className="top-bar flex justify-between items-center pb-4 pt-3">
        <ul className="w-modes  flex justify-between items-center gap-5">
          {/* <li>Today</li> */}
          <button
            onClick={() => setToggleState(true)}
            className="font-bold text-lg text-black-900"
          >
            Today
          </button>
          <button
            onClick={() => setToggleState(false)}
            className="font-light text-lg text-black-900"
          >
            Week
          </button>
        </ul>
        <ul className="w-units  flex justify-between items-center gap-5">
          <li>&deg;F</li>
          <li>&deg;C</li>
        </ul>
      </div>

      <div className="w-single-card-wrpper grid grid-cols-5 gap-4">
        {toggleState ? <HourlyCard /> : <DailyCard />}
      </div>
    </div>
  );
};

export default WeatherDetails;

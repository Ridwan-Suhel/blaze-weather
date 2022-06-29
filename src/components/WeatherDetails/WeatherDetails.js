import React from "react";

const WeatherDetails = () => {
  return (
    <div className="main-weather-details w-3/4">
      <div className="top-bar flex justify-between items-center pb-4 pt-3">
        <ul className="w-modes  flex justify-between items-center gap-5">
          <li>Today</li>
          <li>Week</li>
        </ul>
        <ul className="w-units  flex justify-between items-center gap-5">
          <li>&deg;F</li>
          <li>&deg;C</li>
        </ul>
      </div>
      <div className="w-single-card-wrpper grid grid-cols-5">
        {/* single card */}
        <div className="card p-4 rounded-lg shadow text-center bg-white">
          <h2 className="text-xl">12:00 AM</h2>
          <div className="w-img text-center my-4">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="img"
              className="w-[100px] mx-auto scale-[1.3]"
            />
          </div>
          <div className="card-unit">
            <h2 className="text-xl">16&deg; C</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;

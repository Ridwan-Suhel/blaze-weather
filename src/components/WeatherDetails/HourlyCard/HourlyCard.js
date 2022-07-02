import React from "react";
import moment from "moment-timezone";

const HourlyCard = ({ data, unitActiveClass, timeZone }) => {
  return (
    <div className="transition-all duration-500 md:w-[150px] card p-4 rounded-lg shadow text-center bg-white dark:bg-slate-900 dark:shadow-slate-500 dark:text-slate-300">
      <h2 className="text-xl">{moment?.unix(data.dt)?.format("LT")}</h2>
      <div className="w-img text-center my-4">
        <img
          src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
          alt="img"
          className="w-[100px] object-cover mx-auto scale-[1.3]"
        />
      </div>
      <div className="card-unit">
        <h2 className="text-xl">
          {data?.temp}&deg; {unitActiveClass ? "C" : "F"}
        </h2>
      </div>
    </div>
  );
};

export default HourlyCard;

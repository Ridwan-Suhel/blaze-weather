import React from "react";
import moment from "moment-timezone";
const DailyCard = ({ data, unitActiveClass }) => {
  const minTemp = data?.temp?.min;
  const min = minTemp.toString().slice(0, 2);
  const maxTemp = data?.temp?.max;
  const max = maxTemp.toString().slice(0, 2);

  return (
    <div className="card p-4 rounded-lg shadow text-center bg-white dark:bg-slate-900 dark:shadow-slate-500 dark:text-slate-300">
      <h2 className="text-xl">{moment?.unix(data.dt)?.format("ddd")}</h2>
      <div className="w-img text-center my-4">
        <img
          src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
          alt="img"
          className="w-[100px] object-cover mx-auto scale-[1.3]"
        />
      </div>
      <div className="card-unit">
        <h2 className="text-lg">
          {min}&deg;<sup>{unitActiveClass ? "C" : "F"}</sup> - {max}&deg;
          <sup>{unitActiveClass ? "C" : "F"}</sup>
        </h2>
      </div>
    </div>
  );
};

export default DailyCard;

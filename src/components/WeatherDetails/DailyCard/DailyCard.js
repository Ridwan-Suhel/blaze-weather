import React from "react";

const DailyCard = ({ data, unitActiveClass }) => {
  // =====================DATE & TIME======================
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let d = new Date(data?.dt * 1000);
  let dayName = days[d.getDay()];

  let hours = d.getHours();
  let minutes = d.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  // =====================DATE & TIME END======================

  const minTemp = data?.temp?.min;
  const min = minTemp.toString().slice(0, 2);
  const maxTemp = data?.temp?.max;
  const max = maxTemp.toString().slice(0, 2);

  return (
    <div className="card p-4 rounded-lg shadow text-center bg-white">
      {/* <h2 className="text-xl">Fri</h2> */}
      <h2 className="text-xl">{dayName}</h2>
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

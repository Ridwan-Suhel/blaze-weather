import React from "react";

const HourlyCard = () => {
  return (
    <div className="card p-4 rounded-lg shadow text-center bg-white">
      <h2 className="text-xl">12:00 AM</h2>
      <div className="w-img text-center my-4">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="img"
          className="w-[100px] object-cover mx-auto scale-[1.3]"
        />
      </div>
      <div className="card-unit">
        <h2 className="text-xl">16&deg; C</h2>
      </div>
    </div>
  );
};

export default HourlyCard;

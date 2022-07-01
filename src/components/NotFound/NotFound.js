import React from "react";
import notFoundData from "../../../src/images/not-found-data.gif";

const NotFound = () => {
  return (
    <div>
      <img
        className="w-[150px] mx-auto object-cover] rounded-full mt-5"
        src={notFoundData}
        alt="Data Not Found"
      />
      <h2 className="text-center mt-4 text-2xl font-light dark:text-white  ">
        Oops! No City Found.
      </h2>
    </div>
  );
};

export default NotFound;

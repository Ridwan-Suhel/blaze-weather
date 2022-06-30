import React from "react";
import notFoundData from "../../../src/images/not-found-data.gif";

const NotFound = () => {
  return (
    <div>
      <img
        className="w-[150px] mx-auto object-cover]"
        src={notFoundData}
        alt="Data Not Found"
      />
      <h2 className="text-center text-2xl font-light ">Oops! No City Found.</h2>
    </div>
  );
};

export default NotFound;

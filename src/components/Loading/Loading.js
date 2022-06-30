import React from "react";
import loading from "../../../src/images/loading-loading-forever.gif";

const Loading = () => {
  return (
    <div>
      <img
        className="w-[30px] h-[30px] object-cover"
        src={loading}
        alt="Loading..."
      />
    </div>
  );
};

export default Loading;

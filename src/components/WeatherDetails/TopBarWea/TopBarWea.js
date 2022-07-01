import React from "react";

import ToggleTheme from "../../ToggleTheme/ToggleTheme";

const TopBarWea = ({
  unitActiveClass,
  setToggleState,
  setUnitActiveClass,
  setActiveClass,
  activeClass,
  setUnit,
}) => {
  return (
    <div className="top-bar flex justify-between items-center pb-4 pt-1">
      <ul className="w-modes flex justify-between items-center gap-5">
        <button
          onClick={() => {
            setToggleState(true);
            setActiveClass(true);
          }}
          className={`${
            activeClass ? "font-bold border-b-2 border-black" : ""
          } font-light text-lg text-black-900 dark:text-white`}
        >
          Today
        </button>
        <button
          onClick={() => {
            setToggleState(false);
            setActiveClass(false);
          }}
          className={` ${
            activeClass ? "" : "font-bold border-b-2 border-black"
          } font-light text-lg text-black-900`}
        >
          Week
        </button>
      </ul>

      <ul className="w-units  flex justify-between items-center gap-2">
        <button
          onClick={() => {
            setUnit("metric");
            setUnitActiveClass(true);
          }}
          className={`${
            unitActiveClass
              ? " bg-black text-white"
              : "bg-[fafafa] text-black border"
          } w-[35px] h-[35px] text-center rounded-full`}
        >
          &deg;C
        </button>
        <button
          onClick={() => {
            setUnit("imperial");
            setUnitActiveClass(false);
          }}
          className={`${
            unitActiveClass
              ? "bg-[fafafa] text-black border"
              : "bg-black text-white"
          } w-[35px] h-[35px] text-center rounded-full`}
        >
          &deg;F
        </button>
      </ul>

      <ToggleTheme />
    </div>
  );
};

export default TopBarWea;

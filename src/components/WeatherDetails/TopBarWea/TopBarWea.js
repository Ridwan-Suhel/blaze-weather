import React from "react";

import ToggleTheme from "../../ToggleTheme/ToggleTheme";

const TopBarWea = ({
  unitActiveClass,
  setToggleState,
  setUnitActiveClass,
  setActiveClass,
  activeClass,
  setUnit,
  setDark,
  isDark,
}) => {
  return (
    <div className="top-bar flex justify-between items-center pb-4 pt-1">
      <ul className="w-modes flex justify-between items-center gap-5">
        <button
          title="Show Today's Data"
          onClick={() => {
            setToggleState(true);
            setActiveClass(true);
          }}
          className={`${
            activeClass
              ? "font-bold border-b-2 border-black dark:border-white"
              : ""
          } font-light text-lg text-black-900 dark:text-white `}
        >
          Today
        </button>
        <button
          title="Show Week's Data"
          onClick={() => {
            setToggleState(false);
            setActiveClass(false);
          }}
          className={` ${
            activeClass
              ? ""
              : "font-bold border-b-2 border-black  dark:border-white"
          } font-light text-lg text-black-900 dark:text-white`}
        >
          Week
        </button>
      </ul>

      <ul className="w-units  flex justify-between items-center gap-2">
        <button
          title="Show Celcious"
          onClick={() => {
            setUnit("metric");
            setUnitActiveClass(true);
          }}
          className={`${
            unitActiveClass
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "bg-[#fafafa] text-black border dark:bg-[#000000] dark:text-white"
          } w-[35px] h-[35px] text-center rounded-full`}
        >
          &deg;C
        </button>
        <button
          title="Show Feirheinheit"
          onClick={() => {
            setUnit("imperial");
            setUnitActiveClass(false);
          }}
          className={`${
            unitActiveClass
              ? "bg-[#fafafa] text-black border dark:bg-black dark:text-white"
              : "bg-black text-white dark:bg-white dark:text-black"
          } w-[35px] h-[35px] text-center rounded-full`}
        >
          &deg;F
        </button>
      </ul>

      <ToggleTheme setDark={setDark} isDark={isDark} />
    </div>
  );
};

export default TopBarWea;

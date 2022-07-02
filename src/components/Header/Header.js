import React, { useState } from "react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";

import "./Header.css";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header = () => {
  const [navMenu, setNavMenu] = useState(true);

  const menu = () => {
    setNavMenu(!navMenu);
    console.log("clicked");
    console.log(navMenu);
  };

  return (
    <header className="py-4 bg-white border-b border-slate-100  dark:bg-slate-900 dark:border-slate-700">
      <div className="container mx-auto px-4 lg:px-0">
        <nav className="flex justify-between items-center relative ">
          <h2 className="text-2xl text-white font-bold text-black logo dark:text-white">
            BlazeWeather.
          </h2>
          <ul className="hidden sm:flex items-center text-white font-normal text-lg gap-5 text-black dark:text-white">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>BLOG</li>
          </ul>
          {/* mobile menu */}
          <div onClick={menu} className="mobile-menu block sm:hidden">
            {navMenu ? (
              <MenuAlt1Icon className="text-black dark:text-white w-6 h-6" />
            ) : (
              <XIcon className="text-black dark:text-white w-6 h-6" />
            )}
          </div>

          <ul
            className={`${
              !navMenu
                ? "left-5 opacity-1 visible"
                : "left-full opacity-0 invisible"
            } z-10 rounded-l-xl transition-all duration-500 text-3xl flex flex-col gap-4 absolute top-[9.5vh] w-[100%] h-[91.5vh] items-center justify-center bg-slate-200 shadow font-normal text-lg text-black dark:text-white dark:bg-slate-900`}
          >
            <div className="absolute top-5 right-5">
              <ToggleTheme />
            </div>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>BLOG</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

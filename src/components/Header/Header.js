import React from "react";
import { MenuAlt1Icon } from "@heroicons/react/outline";

import "./Header.css";

const Header = () => {
  return (
    <header className="py-4 bg-white border-b border-slate-100  dark:bg-slate-900 dark:border-slate-700">
      <div className="container mx-auto px-4 lg:px-0">
        <nav className="flex justify-between items-center">
          <h2 className="text-2xl text-white font-bold text-black logo dark:text-white">
            BlazeWeather.
          </h2>
          <ul className="hidden sm:flex items-center text-white font-normal text-lg gap-5 text-black dark:text-white">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>BLOG</li>
          </ul>
          <div className="mobile-menu block sm:hidden ">
            <MenuAlt1Icon className="text-black w-6 h-6" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

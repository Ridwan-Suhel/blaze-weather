import React from "react";

const Header = () => {
  return (
    <header className="py-4 bg-white border-b">
      <div className="container mx-auto px-4 lg:px-0">
        <nav className="flex justify-between items-center">
          <h2 className="text-2xl text-white font-bold text-black">
            BlazeWeather.
          </h2>
          <ul className="flex items-center text-white font-normal text-lg gap-5 text-black">
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

import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import UseDarkMode from "../../Hooks/UseDarkMode/UseDarkMode";

const ToggleTheme = () => {
  const [setTheme, colorTheme, setDark, isDark] = UseDarkMode();
  console.log(isDark);
  return (
    <ul
      onClick={() => {
        setTheme(colorTheme);
        setDark(!isDark);
      }}
      className="flex justify-between items-center gap-2"
    >
      {colorTheme === "light" ? (
        <button title="Change Dark Mode">
          <SunIcon className="h-7 w-7 dark:text-white hover:scale-125 transition" />
        </button>
      ) : (
        <button title="Change Light Mode">
          <MoonIcon className="h-7 w-7 text-black hover:scale-125 transition" />
        </button>
      )}
    </ul>
  );
};

export default ToggleTheme;

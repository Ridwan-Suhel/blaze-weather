import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import UseDarkMode from "../../Hooks/UseDarkMode/UseDarkMode";

const ToggleTheme = () => {
  const [setTheme, colorTheme] = UseDarkMode();
  return (
    <ul
      onClick={() => setTheme(colorTheme)}
      className="flex justify-between items-center gap-2"
    >
      {colorTheme === "light" ? (
        <button>
          <SunIcon className="h-5 w-5 text-yellow-900 hover:scale-125 transition" />
        </button>
      ) : (
        <button>
          <MoonIcon className="h-5 w-5 text-slate-400 hover:scale-125 transition" />
        </button>
      )}
    </ul>
  );
};

export default ToggleTheme;

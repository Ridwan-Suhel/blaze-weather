import { useEffect, useState } from "react";

const UseDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);
  return [setTheme, colorTheme];
};

export default UseDarkMode;

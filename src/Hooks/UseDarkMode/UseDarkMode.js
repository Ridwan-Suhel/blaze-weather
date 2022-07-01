import { useEffect, useState } from "react";

const UseDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.theme);
  const [isDark, setDark] = useState(false);
  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);
  return [setTheme, colorTheme, setDark, isDark];
};

export default UseDarkMode;

import { useEffect, useState } from "react";
import { ThemeContext } from "./useTheme";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saveUser = localStorage.getItem("theme");
    return saveUser ? saveUser : "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;

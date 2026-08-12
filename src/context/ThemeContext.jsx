import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

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

export default ThemeProvider

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context)  throw new Error("useTheme must be inside <ThemeProvider>")
  return context;
}

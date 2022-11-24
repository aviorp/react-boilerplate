import React, { createContext, useEffect, useState } from "react";

// create context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // set theme
  const setMode = mode => {
    setTheme(mode);
  };

  // toggle theme
  const toggleTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  //set theme listener to tailwindcss class
  useEffect(()=>{
    const html = document.querySelector("html");
    html.classList.toggle("dark");
  },[theme])

  // return provider
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

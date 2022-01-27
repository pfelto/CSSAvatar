import React, { useContext, useState } from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#f7f5fa",
  },
  dark: {
    foreground: "#ffffff",
    background: "#6a9e89",
  },
};

export const ThemeContext = React.createContext(null);

export function ThemeProvider(props) {
  const [theme, setTheme] = useState(themes.dark);
  const contextValue = { theme, setTheme };
  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Cannot use useTheme outside of ThemeProvider");
  }
  return context;
}

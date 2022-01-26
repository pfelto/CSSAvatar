import React from "react";
import { themes, useTheme } from "../context/theme-context";
import { ThemeButton } from "./ThemeButton";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.background,
        color: theme.foreground,
      }}
    >
      <h1
        style={{
          flex: 1,
        }}
      >
        Paul's Portfolio Site
      </h1>
      <ThemeButton
        onClick={() => {
          if (theme.foreground === "#ffffff") setTheme(themes.light);
          else setTheme(themes.dark);
        }}
      >
        Change Theme
      </ThemeButton>
    </header>
  );
};

import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useTheme } from "../context/ThemeContext";

export const Layout = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
      }}
    >
      <Header svgColor={theme.foreground} />
      <main>{children}</main>
      <Footer iconColor={theme.foreground} />
    </div>
  );
};

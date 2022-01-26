import React from "react";
import { useTheme } from "../context/theme-context";

export const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <h1>My first SVG</h1>
      <svg width="100" height="100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="green"
          strokeWidth="4"
          fill="yellow"
        />
      </svg>
    </footer>
  );
};

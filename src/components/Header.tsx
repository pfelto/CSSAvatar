import React from "react";
import { themes, useTheme } from "../context/ThemeContext";
import { ThemeButton } from "./ThemeButton";

export const Header = ({ svgColor }) => {
  const { setTheme } = useTheme();
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="homeicon" style={{ flex: 3, display: "flex" }}>
        <svg width="60" height="60">
          <line
            className="line firstLine"
            x1="10"
            y1="10"
            x2="10"
            y2="50"
            style={{ stroke: svgColor, strokeWidth: "2px" }}
          ></line>
          <line
            className="line firstLine"
            x1="10"
            y1="10"
            x2="28"
            y2="10"
            style={{ stroke: svgColor, strokeWidth: "2px" }}
          ></line>
          <line
            className="line firstLine"
            x1="10"
            y1="28"
            x2="28"
            y2="28"
            style={{ stroke: svgColor, strokeWidth: "2px" }}
          ></line>
          <line
            className="line firstLine"
            x1="28"
            y1="10"
            x2="28"
            y2="28"
            style={{ stroke: svgColor, strokeWidth: "2px" }}
          ></line>
          <line
            className="line firstLine"
            x1="32"
            y1="10"
            x2="32"
            y2="50"
            style={{ stroke: svgColor, strokeWidth: "2px" }}
          ></line>
          <line
            className="line firstLine"
            x1="32"
            y1="10"
            x2="50"
            y2="10"
            style={{ stroke: svgColor, strokeWidth: "2px" }}
          ></line>
          <line
            className="line firstLine"
            x1="32"
            y1="28"
            x2="50"
            y2="28"
            style={{ stroke: svgColor, strokeWidth: "2px" }}
          ></line>
        </svg>
      </div>
      <div className="mainNav" style={{ flex: 1, display: "flex" }}>
        <nav>
          <div>Projects</div>
          <div>Blog</div>
          <ThemeButton
            onClick={() =>
              svgColor === "#ffffff"
                ? setTheme(themes.light)
                : setTheme(themes.dark)
            }
            style={{ backgroundColor: "inherit", color: "inherit" }}
          >
            Change Theme
          </ThemeButton>
        </nav>
      </div>
    </header>
  );
};

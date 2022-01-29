import React from "react";
import { themes, useTheme } from "../context/ThemeContext";
import { ThemeButton } from "./ThemeButton";
import { Link, NavLink } from "react-router-dom";

export const Header = ({ svgColor }) => {
  const { setTheme } = useTheme();
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "2vw 0",
      }}
    >
      <div>
        <Link to="/">
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
        </Link>
      </div>

      <div style={{ display: "flex" }}>
        <nav style={{ padding: "0 2vw" }}>
          <ul
            style={{
              display: "flex",
              padding: 0,
              justifyContent: "center",
              listStyle: "none",
            }}
          >
            <li>
              <NavLink
                to="/projects"
                style={({ isActive }) => {
                  if (isActive) {
                    return {
                      color: "inherit",
                      textDecoration: "underline",
                      fontWeight: "Bold",
                    };
                  } else {
                    return {
                      color: "inherit",
                      textDecoration: "none",
                      fontWeight: "lighter",
                    };
                  }
                }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                style={({ isActive }) => {
                  if (isActive) {
                    return {
                      color: "inherit",
                      textDecoration: "underline",
                      fontWeight: "Bold",
                    };
                  } else {
                    return {
                      color: "inherit",
                      textDecoration: "none",
                      fontWeight: "lighter",
                    };
                  }
                }}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
        <ThemeButton
          onClick={() =>
            svgColor === "#ffffff"
              ? setTheme(themes.light)
              : setTheme(themes.dark)
          }
          style={{
            backgroundColor: "inherit",
            color: "inherit",
          }}
        >
          Change Theme
        </ThemeButton>
      </div>
    </header>
  );
};

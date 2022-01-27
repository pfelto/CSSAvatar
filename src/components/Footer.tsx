import React from "react";

export const Footer = ({ style }) => {
  return (
    <footer style={style}>
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

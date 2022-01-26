import React from "react";

export const ThemeButton = (props) => {
  return (
    <button {...props} style={{ backgroundColor: "inherit", color: "inherit" }}>
      {props.children}
    </button>
  );
};

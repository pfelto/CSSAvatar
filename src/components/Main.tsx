import React from "react";
import { useTheme } from "../context/theme-context";

export const Main = () => {
  const { theme } = useTheme();
  return (
    <main
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <section style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ height: "150vh" }}>Main</div>
      </section>
    </main>
  );
};

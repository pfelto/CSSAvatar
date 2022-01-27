import React from "react";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Layout>Main</Layout>
    </ThemeProvider>
  );
}

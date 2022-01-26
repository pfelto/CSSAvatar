import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Page } from "./components/Page";
import { ThemeProvider } from "./context/theme-context";

function App() {
  return (
    <Page>
      <ThemeProvider>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </Page>
  );
}

export default App;

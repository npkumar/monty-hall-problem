import React from "react";

import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ApplicationProvider } from "./services/Application";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App = () => (
  <ApplicationProvider>
    <ThemeProvider theme={darkTheme}>
      <Dashboard />
    </ThemeProvider>
  </ApplicationProvider>
);

export default App;

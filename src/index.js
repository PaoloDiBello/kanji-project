import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {}
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
      <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

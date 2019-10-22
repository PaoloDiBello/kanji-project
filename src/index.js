import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { store, history } from "./redux/store";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {}
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

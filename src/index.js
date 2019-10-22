import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Header, Footer} from './components/Layouts/index'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {}
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
      <Header/>
      <App />
      <Footer/>
  </MuiThemeProvider>,
  document.getElementById("root")
);

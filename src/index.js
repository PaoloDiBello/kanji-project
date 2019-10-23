import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Header, Footer } from "./components/Layouts/index";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const theme = createMuiTheme({
  palette: {}
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Header />
      <App />
      <Footer />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

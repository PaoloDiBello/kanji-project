import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Header, Footer } from "./components/Layouts/index";

import LayoutContentWrapper from "./components/utility/layoutWrapper";
import LayoutContent from "./components/utility/layoutContent";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const theme = createMuiTheme({
  palette: {}
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <Header />
        <LayoutContentWrapper>
          <LayoutContent>
            <App />
            <Footer />
          </LayoutContent>
        </LayoutContentWrapper>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

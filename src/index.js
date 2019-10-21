import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { store, history } from './redux/store';

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import {blue, indigo} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: indigo 
        }
    }
})


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
       <App />
       </Provider>

    </MuiThemeProvider>
, document.getElementById('root'));
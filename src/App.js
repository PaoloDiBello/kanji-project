import React from 'react';
import './App.css';
import ListItems from './components/ListItems/ListItems'
import SingleItem from './components/SingleItem/SingleItem'
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <Switch>
        <Route path="/info/:item" component={SingleItem} />
        <Route exact component={ListItems} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;

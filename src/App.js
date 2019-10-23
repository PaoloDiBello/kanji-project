import React, {lazy, Suspense} from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";


const ListItems = (
  lazy(() => (
    import('./components/ListItems/ListItems')
  ))
)

const SingleItem = (
  lazy(() => (
    import('./components/SingleItem/SingleItem')
  ))
)

const NotFound = (
  lazy(() => (
    import('./components/404')
  ))
)


function App() {


  return (
      <BrowserRouter>
      <Suspense fallback={<>loading..</>}>
        <Switch>
        <Route exact path="/info/:item" component={SingleItem} />
        <Route path="/" exact component={ListItems} />
        <Route path="/404" component={NotFound} />
        <Route path="*" component={NotFound} />
        </Switch>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
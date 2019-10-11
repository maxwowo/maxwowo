import React from 'react';
import LandingPage from './Pages/LandingPage/LandingPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path='/'
        component={LandingPage}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;

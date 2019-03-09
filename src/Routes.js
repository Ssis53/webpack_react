import React from 'react';
import Home from './routers/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

const Routes = (props) => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" render={
        (routerProps) => (
          <Home {...routerProps} />
        )} 
      />
    </Switch>
  </Router>
)

export default Routes;
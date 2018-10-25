import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../containers/Login';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route
        path="/"
        render={props => {
          const { location } = props;
          return location.state && location.state.is404 ? (
            <NotFound />
          ) : (
            <Home {...props} />
          );
        }}
      />
    </Switch>
  </Router>
);

export default Routes;

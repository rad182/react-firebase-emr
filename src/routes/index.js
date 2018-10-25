import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../containers/Login';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import RequireAuth from '../components/RequireAuth';

const AuthHome = RequireAuth(Home);

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
            <AuthHome {...props} />
          );
        }}
      />
    </Switch>
  </Router>
);

export default Routes;

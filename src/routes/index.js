import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../containers/Login';
import Home from '../containers/Home';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default Routes;

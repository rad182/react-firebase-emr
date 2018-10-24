import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../containers/Login';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);

export default Routes;

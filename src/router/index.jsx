import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import HelloPage from 'modules/HelloPage';

import paths from './paths';

const RouterComponent = () => (
  <Router>
    <Switch>
      <Route
        exact
        path={paths.root}
        component={HelloPage}
      />
    </Switch>
  </Router>
);

export default RouterComponent;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import MeuAprendizadoPage from 'containers/MeuAprendizadoPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import { ProtectedRoute } from 'routes/ProtectedRoute';
import * as pathNames from 'routes/pathNames';

const routes = (
  <Switch>
    <Route exact path={pathNames.BASE_PATH} component={HomePage} />
    <Route path={pathNames.LOGIN} component={LoginPage} />
    <ProtectedRoute
      exact
      path={pathNames.LEARNER_HOME}
      component={MeuAprendizadoPage}
    />
    <Route path="" component={NotFoundPage} />
  </Switch>
);

export default routes;

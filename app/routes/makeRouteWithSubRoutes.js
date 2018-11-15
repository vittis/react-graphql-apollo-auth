import React from 'react';
import { Route } from 'react-router-dom';

export const MakeRouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

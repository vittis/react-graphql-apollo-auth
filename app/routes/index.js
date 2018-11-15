import React from 'react';
import { Switch } from 'react-router-dom';
import { routes } from 'routes/routes';
import { MakeRouteWithSubRoutes } from 'routes/makeRouteWithSubRoutes';

export const Routes = () => (
  <Switch>
    {routes.map((route, index) => (
      <MakeRouteWithSubRoutes key={index.toString()} {...route} />
    ))}
  </Switch>
);

export default Routes;

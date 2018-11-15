import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import { AUTH_TOKEN, isExpired } from 'modules/auth/util/jwt';
import { GET_AUTH_LOCAL } from 'modules/auth/AuthStore';
import * as pathNames from 'routes/pathNames';

// Not using this, using AuthRouteHoc instead. File is kept for reference, delete it later

export const RequiresAuthRoute = ({ component: Component, ...rest }) => {
  const isTokenExpired = isExpired(localStorage.getItem(AUTH_TOKEN));
  return (
    <Query query={GET_AUTH_LOCAL}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        return (
          <Route
            {...rest}
            render={props => {
              if (data.status === 'loggedIn' && !isTokenExpired) {
                return <Component {...props} />;
              }
              return (
                <Redirect
                  to={{
                    pathname: pathNames.LOGIN,
                    state: {
                      from: props.location,
                    },
                  }}
                />
              );
            }}
          />
        );
      }}
    </Query>
  );
};

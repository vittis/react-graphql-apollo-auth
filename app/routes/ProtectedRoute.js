import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import { AUTH_TOKEN, isExpired } from 'util/jwt';
import { GET_AUTH_LOCAL } from 'localStores/AuthStore';
import * as pathNames from 'routes/pathNames';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
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
              if (data.authStatus.status === 'loggedIn' && !isTokenExpired) {
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

import * as React from 'react';
import { compose, graphql } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { GET_AUTH_LOCAL } from 'modules/auth/AuthStore';
import * as pathNames from 'routes/pathNames';

/* eslint-disable react/prefer-stateless-function */
const AuthRoute = () => WrappedComponent =>
  class extends React.Component {
    render() {
      const { data } = this.props;
      return data.status === 'loggedOut' ? (
        <Redirect
          to={{
            pathname: pathNames.LOGIN,
            state: {
              from: this.props.location,
            },
          }}
        />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };

export default compose(
  graphql(GET_AUTH_LOCAL),
  AuthRoute()
);

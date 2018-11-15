import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { GET_AUTH_LOCAL } from 'modules/auth/AuthStore';

const AuthStatus = props => (
  <Query {...props} query={GET_AUTH_LOCAL}>
    {payload => props.children(payload)}
  </Query>
);

AuthStatus.propTypes = {
  children: PropTypes.func.isRequired,
};

export default AuthStatus;

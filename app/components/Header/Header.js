import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Button } from 'reactstrap';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Mutation, Query } from 'react-apollo';
import { AUTH_TOKEN, isExpired } from 'util/jwt';
import { GET_AUTH_LOCAL, LOGOUT_MUTATION_LOCAL } from 'localStores/AuthStore';
import * as pathNames from 'routes/pathNames';
import './header.module.scss';

/* eslint-disable react/prefer-stateless-function */
class Header extends Component {
  render() {
    const isTokenExpired = isExpired(localStorage.getItem(AUTH_TOKEN));
    return (
      <Query query={GET_AUTH_LOCAL}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <div styleName="header">
              <Link styleName="button" to={pathNames.BASE_PATH}>
                <Button>Home</Button>
              </Link>
              <Link styleName="button" to={pathNames.LEARNER_HOME}>
                <Button disabled={isTokenExpired}>Meu Aprendizado</Button>
              </Link>
              {data.authStatus.status === 'loggedIn' && !isTokenExpired ? (
                <Mutation mutation={LOGOUT_MUTATION_LOCAL}>
                  {logoutMutationLocal => (
                    <Button
                      styleName="button"
                      onClick={() => {
                        logoutMutationLocal();
                        localStorage.removeItem(AUTH_TOKEN);
                        this.props.history.push(pathNames.LOGIN);
                      }}
                    >
                      Logout
                    </Button>
                  )}
                </Mutation>
              ) : (
                <Link to={pathNames.LOGIN}>
                  <Button styleName="button">Login</Button>
                </Link>
              )}
            </div>
          );
        }}
      </Query>
    );
  }
}
Header.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
export default withRouter(Header);

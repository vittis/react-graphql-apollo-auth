import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import LoginForm from 'components/LoginForm';
import ReactRouterPropTypes from 'react-router-prop-types';
import { AUTH_TOKEN, isExpired } from 'util/jwt';
import { LOGIN_MUTATION_LOCAL } from 'localStores/AuthStore';
import * as pathNames from 'routes/pathNames';
import { LOGIN_MUTATION } from './mutations';
import './loginPage.module.scss';

export default class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  // eslint-disable-next-line no-unused-vars
  onMutationError = error => {
    this.setState({ email: '', password: '' });
  };

  onSubmitForm = (e, loginMutation) => {
    e.preventDefault();
    loginMutation();
  };

  onMutationCompleted = async (data, loginMutationLocal) => {
    const { token } = data.login;
    this.saveUserData(token);
    loginMutationLocal().then(() => {
      const { from } = this.props.location.state || {
        from: { pathname: pathNames.BASE_PATH },
      };
      this.props.history.push(from.pathname);
    });
  };

  // TODO: Separar logica de autenticacao em outro arquivo
  saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };

  handleChange = async event => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    await this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    const isTokenExpired = isExpired(localStorage.getItem(AUTH_TOKEN));

    if (!isTokenExpired) {
      return (
        <Redirect
          to={{
            pathname: pathNames.BASE_PATH,
            state: {
              from: this.props.location,
            },
          }}
        />
      );
    }
    return (
      <div>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="" />
        </Helmet>

        <Mutation mutation={LOGIN_MUTATION_LOCAL}>
          {loginMutationLocal => (
            <Mutation
              onError={error => this.onMutationError(error)}
              mutation={LOGIN_MUTATION}
              variables={{ email, password }}
              onCompleted={data =>
                this.onMutationCompleted(data, loginMutationLocal)
              }
            >
              {(loginMutation, { loading, error }) => (
                <div>
                  <LoginForm
                    onSubmit={e => {
                      this.onSubmitForm(e, loginMutation);
                    }}
                    onChangeHandle={this.handleChange}
                    email={email}
                    password={password}
                    error={error}
                    loading={loading}
                  />
                </div>
              )}
            </Mutation>
          )}
        </Mutation>
      </div>
    );
  }
}
LoginPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

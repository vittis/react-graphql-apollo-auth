import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import * as jwt from 'modules/auth/util/jwt';
import { LOGIN_MUTATION_LOCAL } from 'modules/auth/AuthStore';
import * as pathNames from 'routes/pathNames';
import AuthStatus from 'modules/auth/util/AuthStatus';
import { LOGIN_MUTATION } from './mutations';
import './loginPage.module.scss';
import LoginForm from './components/LoginForm';

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
    const { token, user } = data.login;
    jwt.saveUserData(token);
    loginMutationLocal().then(() => {
      let pathNameDestiny = pathNames.BASE_PATH;
      // TODO: Fazer checagem correta da role do usuario e guardar em estado global (modules/permissions)
      pathNameDestiny =
        user.roles.length > 0 ? pathNames.ADMIN_HOME : pathNames.LEARNER_HOME;

      const { from } = this.props.location.state || {
        from: { pathname: pathNameDestiny },
      };
      this.props.history.push(from.pathname);
    });
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
    // const isTokenExpired = isExpired(localStorage.getItem(AUTH_TOKEN));
    return (
      <AuthStatus>
        {payload => (
          <div>
            {payload.data.status === 'loggedIn' && (
              <Redirect
                to={{
                  // TODO: Redirecionar de acordo com role do usuario
                  pathname: pathNames.LEARNER_HOME,
                  state: {
                    from: this.props.location,
                  },
                }}
              />
            )}

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
                  {(loginMutation, { loading, error, called }) => (
                    <div>
                      <LoginForm
                        onSubmit={e => {
                          this.onSubmitForm(e, loginMutation);
                        }}
                        onChangeHandle={this.handleChange}
                        email={email}
                        password={password}
                        error={!!error}
                        loading={loading}
                        called={called}
                      />
                    </div>
                  )}
                </Mutation>
              )}
            </Mutation>
          </div>
        )}
      </AuthStatus>
    );
  }
}
LoginPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

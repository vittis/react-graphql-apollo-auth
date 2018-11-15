import React from 'react';
import { mount } from 'enzyme';
// import LoginForm from 'components/LoginForm';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import { LOGIN_MUTATION_LOCAL, GET_AUTH_LOCAL } from 'modules/auth/AuthStore';

import LoginPage from '../LoginPage';
import { LOGIN_MUTATION } from '../mutations';

const mocks = [
  {
    request: {
      query: GET_AUTH_LOCAL,
    },
    result: {
      data: {
        status: 'loggedOut',
      },
    },
  },
  {
    request: {
      query: LOGIN_MUTATION,
      variables: {
        email: 'admin@localhost.com',
        password: 'secret',
      },
    },
    result: {
      data: {
        // TODO: Adicionar restante da query de acordo
        login: {
          ok: true,
          token: 'sample-token',
          user: {
            roles: [],
          },
        },
      },
    },
  },
  {
    request: {
      query: LOGIN_MUTATION_LOCAL,
    },
    result: {
      data: {
        loginMutationLocal: {},
      },
    },
  },
];

describe('<LoginPage />', () => {
  it('renders', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <LoginPage />
      </MockedProvider>
    );
    expect(wrapper.find('LoginForm').exists()).toBe(true);
  });
  it('calls the mutation from LoginForm on submit', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <LoginPage
          location={{ state: { from: '/' } }}
          history={{ push: jest.fn() }}
        />
      </MockedProvider>
    );
    // simulate typing email
    wrapper
      .find('Input')
      .first()
      .simulate('change', {
        target: { name: 'email', value: 'admin@localhost.com' },
      });
    wrapper
      .find('Input')
      .last()
      .simulate('change', {
        target: { name: 'password', value: 'secret' },
      });
    // submit the form
    wrapper.find('form').simulate('submit');
    // login_mutation resolution
    await wait();
    wrapper.update();
    // local_login_mutation resolution
    await wait();
    wrapper.update();
    expect(wrapper.find('.alert-sucess').exists()).toBe(true);
  });
});

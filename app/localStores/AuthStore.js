import gql from 'graphql-tag';
import { AUTH_TOKEN, isExpired } from 'util/jwt';

const isTokenExpired = isExpired(localStorage.getItem(AUTH_TOKEN));

/*
  Defaults
*/

const authDefaults = {
  authStatus: {
    __typename: 'authStatus',
    status: isTokenExpired ? 'loggedOut' : 'loggedIn',
  },
};

/*
  GraphQL
*/

export const GET_AUTH_LOCAL = gql`
  query authStatus {
    authStatus @client {
      status
    }
  }
`;

export const LOGIN_MUTATION_LOCAL = gql`
  mutation loginMutationLocal {
    loginMutationLocal @client
  }
`;

export const LOGOUT_MUTATION_LOCAL = gql`
  mutation logoutMutationLocal {
    logoutMutationLocal @client
  }
`;
/*
  Cache Mutations
*/
const loginMutationLocal = (_obj, _args, { cache }) => {
  cache.writeData({
    data: {
      authStatus: {
        __typename: 'authStatus',
        status: 'loggedIn',
      },
    },
  });
  return null;
};

const logoutMutationLocal = (_obj, _args, { cache }) => {
  cache.writeData({
    data: {
      authStatus: {
        __typename: 'authStatus',
        status: 'loggedOut',
      },
    },
  });
  return null;
};
/*
  Store
*/

/**
 * The Store object used to construct
 * Apollo Link State's Client State
 */
const store = {
  defaults: authDefaults,
  mutations: { loginMutationLocal, logoutMutationLocal },
};

export { store };

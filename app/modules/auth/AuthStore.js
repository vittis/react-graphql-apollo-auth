import gql from 'graphql-tag';
import { AUTH_TOKEN, isExpired } from 'modules/auth/util/jwt';

const isTokenExpired = isExpired(localStorage.getItem(AUTH_TOKEN));

/*
  Defaults
*/

const authDefaults = {
  status: isTokenExpired ? 'loggedOut' : 'loggedIn',
};

/*
  GraphQL
*/

export const GET_AUTH_LOCAL = gql`
  query {
    status @client
  }
`;

export const LOGIN_MUTATION_LOCAL = gql`
  mutation {
    loginMutationLocal @client
  }
`;

export const LOGOUT_MUTATION_LOCAL = gql`
  mutation {
    logoutMutationLocal @client
  }
`;
/*
  Cache Mutations
*/
const loginMutationLocal = (_obj, _args, { cache }) => {
  cache.writeData({
    data: {
      status: 'loggedIn',
    },
  });
  return null;
};

const logoutMutationLocal = (_obj, _args, { cache }) => {
  cache.writeData({
    data: {
      status: 'loggedOut',
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

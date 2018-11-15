import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { API_ENDPOINT } from './constants';
import CreateClientStore from './CreateClientStore';
import { AUTH_TOKEN } from '../modules/auth/util/jwt';

// Apollo Client setup
const cache = new InMemoryCache();

// Set up Local State
const stateLink = CreateClientStore(cache);

const httpLink = createHttpLink({
  uri: API_ENDPOINT,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  console.log('log: authMiddleware');
  const token = localStorage.getItem(AUTH_TOKEN);
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }));

  return forward(operation);
});

/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log('log: errorLink');
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`log: GraphQLError: ${message}`); // TODO: Remover comentarios de controle
      if (message === 'Unauthorized') {
        // every 401/unauthorized error will be caught here and update the global local state
        localStorage.removeItem(AUTH_TOKEN);
        cache.writeData({
          data: {
            status: 'loggedOut',
          },
        });
      }
    });
  }
});

const Client = new ApolloClient({
  link: ApolloLink.from([authMiddleware, errorLink, stateLink, httpLink]),
  cache,
});

export default Client;

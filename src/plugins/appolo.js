import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { createApolloClient } from 'vue-cli-plugin-apollo/graphql-client';
import { HttpLink } from 'apollo-link-http';
// import { ApolloLink } from 'apollo-link';
// mport { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Install the vue plugin
Vue.use(VueApollo);

// Http endpoint
const httpEndpoint = 'http://localhost:4000/graphql';

// Instead of network interface
const httpLink = new HttpLink({
  uri: httpEndpoint,
});

/*
const linkError = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

function delayLink(operation, forward) {
  function setDelay() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('delayLink, passing to next step');
        console.log('delayLink, operation: ', operation);
        return resolve(forward(operation));
      }, 5000);
    });
  }

  return setDelay();
}

const composedLink = ApolloLink.from([delayLink, linkError, httpLink]);
*/

// Config
const defaultOptions = {
  // You can use `https` for secure connection (recommended in production)
  httpEndpoint,
  // You can use `wss` for secure connection (recommended in production)
  // Use `null` to disable subscriptions
  // wsEndpoint: process.env.VUE_APP_GRAPHQL_WS || 'ws://localhost:4000/graphql',
  // LocalStorage token
  // tokenName: AUTH_TOKEN,
  // Enable Automatic Query persisting with Apollo Engine
  persisting: false,
  // Use websockets for everything (no HTTP)
  // You need to pass a `wsEndpoint` for this to work
  websocketsOnly: false,
  // Is being rendered on the server?
  ssr: false,

  // Override default http link
  // link: responseResolverLink,

  // Override default cache
  // cache,

  // Override the way the Authorization header is set
  // getAuth,

  // Additional ApolloClient options
  apollo: {
    link: httpLink,
    cache: new InMemoryCache({
      addTypename: false,
    }),
  },

  // Client local data (see apollo-link-state)
  // clientState: { resolvers: { ... }, defaults: { ... } }
};

// Call this in the Vue app file

// eslint-disable-next-line
export function createProvider(options = {}) {
  // Create apollo client
  const { apolloClient, wsClient } = createApolloClient({
    ...defaultOptions,
    ...options,
  });
  apolloClient.wsClient = wsClient;

  // Create vue apollo provider
  return new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        fetchPolicy: 'network-only',
      },
    },
    errorHandler(error) {
      // eslint-disable-next-line no-console
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message);
    },
  });
}

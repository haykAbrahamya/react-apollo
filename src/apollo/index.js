import {
  ApolloClient,
  InMemoryCache
} from "@apollo/client"

export const apollo = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_URL,
  cache: new InMemoryCache()
});

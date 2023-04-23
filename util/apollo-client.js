import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client;

/* getApolloClient */

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}

/* createApolloClient */

export function _createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://admin.mjalil.com/graphql",
    }),
    cache: new InMemoryCache(),
  });
}

const cache = new InMemoryCache({
  typePolicies: {
    Language: {
      keyFields: ["en", "ar"],
    },
  },
});

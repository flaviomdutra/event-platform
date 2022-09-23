import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl8drsxbo23cv01uear7m2h0j/master",
  cache: new InMemoryCache(),
});

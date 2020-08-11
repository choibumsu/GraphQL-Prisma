const { ApolloServer } = require("apollo-server");
import { schema } from "./graphql/schema";
import { createContext } from "./graphql/context";

const server = new ApolloServer({ schema, context: createContext });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

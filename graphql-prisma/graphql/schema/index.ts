import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import path from "path";
import { resolvers } from "../resolvers";

const allTypes = fileLoader(path.join(__dirname, "/**/*.graphql"));

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs: mergeTypes(allTypes),
});

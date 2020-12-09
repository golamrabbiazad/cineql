import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
    type Query {
        hello(name: String): String!
    }
`;

const resolvers = {
  Query: {
    hello: (_: any, { name }: any) => `Hello ${name || "World"}`,
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => {
  console.log("server on running on port:4000");
});

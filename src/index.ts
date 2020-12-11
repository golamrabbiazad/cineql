import { GraphQLServer } from "graphql-yoga";
import resolvers from "../graphql/resolvers";

const option = {
  port: 9300,
  endpoint: "/graphql",
  playground: "/play",
};

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});
server.start(option, ({ port }) => {
  console.log(`server on running on port:${port}`);
});

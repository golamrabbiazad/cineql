"use strict";
exports.__esModule = true;
var graphql_yoga_1 = require("graphql-yoga");
var typeDefs = "\n    type Query {\n        hello(name: String): String!\n    }\n";
var resolvers = {
    Query: {
        hello: function (_, _a) {
            var name = _a.name;
            return "Hello " + (name || "World");
        }
    }
};
var server = new graphql_yoga_1.GraphQLServer({ typeDefs: typeDefs, resolvers: resolvers });
server.start(function () {
    console.log("server on running on port 4000");
});

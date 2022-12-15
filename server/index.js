const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("./schema");
const resolvers = require("./resolvers");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema, //links the schema to the endpoint here
    rootValue: resolvers, //links the functions to the endpoints here
    graphiql: true, //use the graphiql interace
  })
);

const port = 5050;

app.listen(port);

console.log(
  `GraphQL api server is running on at http://localhost:${port}/graphql`
);

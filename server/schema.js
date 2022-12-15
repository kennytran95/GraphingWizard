const { buildSchema } = require("graphql");

let schema = buildSchema(`
  type Query {
    Books: [Book],
    YOOOOOOO: String,
    Num: Int
    getAll: All
  },
  type All {
    Books: [Book],
    Authors: [Author]
  }
  type Book {
    id: Int,
    name: String,
    authorId: Int
  },
  type Author {
    id: Int,
    name: String
  }
`);
//query string name: type
module.exports.schema = schema;

const WitchcraftData = require("./WitchcraftData");

const resolvers = {
  YOOOOOOO: () => {
    //defines what the query does in a function here.
    return "Hello World!";
  },
  getAll: () => {
    let all = {
      Books: WitchcraftData.books,
      Authors: WitchcraftData.authors,
    };
    return all;
  },
  Books: () => {
    return WitchcraftData.books;
  },
  Num: () => {
    return 32;
  },
};

module.exports = resolvers;

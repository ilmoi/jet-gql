import {connectDb} from "./dbConnection";

const fs = require("fs");
const path = require('path');
const {ApolloServer} = require('apollo-server');

const resolvers = {
  Query: {
    info: () => `test query`,
    reserves: async () => {
      const Reserve = await connectDb();
      return Reserve.find()
    }
  },
}

// --------------------------------------- server

const index = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf-8'
  ),
  resolvers,
})

index
  .listen()
  // @ts-ignore
  .then(({url}) =>
    console.log(`Server is running on ${url}`)
  );

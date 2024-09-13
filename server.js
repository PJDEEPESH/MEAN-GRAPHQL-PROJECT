
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const { gql } = require('apollo-server-express');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mean_stack_demo', { useNewUrlParser: true, useUnifiedTopology: true });

// Define MongoDB schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema);

// Define GraphQL schema
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User]
  }
`;

// Define GraphQL resolvers
const resolvers = {
  Query: {
    users: async () => await User.find()
  }
};

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Create Express app
const app = express();

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    userName: String!
    email: String!
    password: String!
    listings: [Listing]
  }

  type Listing {
    _id: ID!
    description: String
    amount: String
    location: String
    user: String
    contact: Float
    bidsHistory: [Bid]
    aircraft: String
    flightNum: String
    cabinSize: String
    operator: String
    termsConfirm: Boolean
    latestBidUser: User
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    me: User
    listing(_id: ID!): Listing
    listings: [Lising]
  }

  type Checkout {
    session: ID
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    updateUser(userName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

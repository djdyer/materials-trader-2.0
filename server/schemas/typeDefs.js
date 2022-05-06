const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    userName: String!
    email: String!
    password: String!
    listings_id: [Listing]
  }

  type Listing {
    _id: ID!
    description: String
    amount: String
    location: String
    user_Id: User
    materials_Id: [Material]
    comments_Id: [Comment]
  }

  type Comment {
    _id: ID!
    comment: String
    user_Id: User
  }

  type Material {
    _id: ID!
    material: String
    hazardous: Boolean
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
    listings: [Listing]
    comments: [Comment]
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

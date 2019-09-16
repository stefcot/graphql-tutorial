const {
  makeExecutableSchema,
  // addMockFunctionsToSchema,
} = require('graphql-tools');

const { resolvers } = require('./resolvers');

const typeDefs = `
type Channel {
   id: ID!                # "!" denotes a required field
   name: String
}
# This type specifies the entry points into our API. In this case
# there is only one - "channels" - which returns a list of channels.
type Query {
   channels: [Channel]    # "[]" means this is a list of channels
}
# The mutation root type, used to define all mutations.
type Mutation {
  # A mutation to add a new channel to the list of channels
  addChannel(name: String!): Channel
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = { schema };

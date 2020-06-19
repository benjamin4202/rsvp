/**
 * RSVP GraphQL Server
 * Benjamin Pruitt
 */
const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const Query = requie('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')


const resolvers = {
  Query,
  Mutation,
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: { prisma }
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
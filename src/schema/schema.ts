import { makeExecutableSchema } from '@graphql-tools/schema'
import { GraphQLContext } from '../utils/context'
import typeDefs from './schema.graphql'
const db = require('../../models/index')

const resolvers = {
  Query: {
    info: () => 'Some info',
    users: async (parent: unknown, args: {}, context: GraphQLContext) => {
      const users = await db.Users.findAll()
      return users
    },
  },

  Mutation: {
    userById: async (
      parent: unknown,
      args: { id: number },
      context: GraphQLContext
    ) => {
      const user = db.Users.findOne({
        where: {
          id: args.id,
        },
      })
      return user
    },

    createUser: async (
      parent: unknown,
      args: { firstName: string; lastName: string; email: string },
      context: GraphQLContext
    ) => {
      const newUser = await db.Users.create({
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
      })
      return newUser
    },

    createOrder: async (
      parent: unknown,
      args: { item: string; totalAmount: number; order: number },
      context: GraphQLContext
    ) => {
      const newOrder = await db.Order.create({
        item: args.item,
        totalAmount: args.totalAmount,
        order: args.order,
      })
      return newOrder
    },

    getOrders: async (
      parent: unknown,
      args: { userId: number },
      context: GraphQLContext
    ) => {
      const newOrder = await db.Order.findAll({
        where: {
          order: args.userId,
        },
      })
      return newOrder
    },
  },
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
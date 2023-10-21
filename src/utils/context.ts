const db = require('../../models/index')

export type GraphQLContext = {
  db: typeof db
}

export async function contextFactory(): Promise<GraphQLContext> {
  return { db }
}

import { Express } from 'express'
import { graphqlEndpoint } from './routes/graphql'

const routes = (app: Express) => {
  app.get('/health-check', (req, res) => {
    res.sendStatus(200)
  })

  app.all('/graphql', graphqlEndpoint)
}

export default routes

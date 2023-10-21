import { contextFactory } from './utils/context'
import {
  getGraphQLParameters,
  processRequest,
  Request,
  renderGraphiQL,
  shouldRenderGraphiQL,
  sendResult,
} from 'graphql-helix'
import { schema } from './schema/schema'
import { Express, Response } from 'express'
import { createUserHandler } from './routes/users'
import { createOrderHandler, findTopOrdersHandler } from './routes/orders'
const routes = (app: Express) => {
  app.get('/health-check', (req, res) => {
    res.sendStatus(200)
  })

  app.get('/api/create-user', createUserHandler)
  app.get('/api/create-order', createOrderHandler)
  app.get('/api/top-orders', findTopOrdersHandler)

  app.all('/graphql', async (req: Request, res: Response) => {
    const request: Request = {
      headers: req.headers,
      method: req.method,
      query: req.query,
      body: req.body,
    }

    if (shouldRenderGraphiQL(request)) {
      res.setHeader('Content-Type', 'text/html')
      res.send(
        renderGraphiQL({
          endpoint: '/graphql',
        })
      )

      return
    }

    const { operationName, query, variables } = getGraphQLParameters(request)

    const result = await processRequest({
      request,
      schema,
      operationName,
      contextFactory,
      query,
      variables,
    })

    sendResult(result, res)
  })
}

export default routes

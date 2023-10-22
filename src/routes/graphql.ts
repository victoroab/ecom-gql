import { contextFactory } from '../utils/context'
import {
  getGraphQLParameters,
  processRequest,
  Request,
  renderGraphiQL,
  shouldRenderGraphiQL,
  sendResult,
} from 'graphql-helix'
import { schema } from '../schema/schema'

import { Response } from 'express'

export const graphqlEndpoint = async (req: Request, res: Response) => {
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
}

import { FastifyReply, FastifyRequest } from 'fastify'

const fastify = require('fastify')
const db = require('./plugin/database')
const testRoute = require('./route/tempRoute/route')
const app = (opts = {}) => {
  const app = fastify(opts)

  //register plugin
  app.register(db)

  //register route
  app.register(testRoute, { prefix: 'api/v1/test' })
  app.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ hello: 'world!' })
  })
  return app
}

export default app

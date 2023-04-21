import { FastifyReply, FastifyRequest } from 'fastify'
import fastify from 'fastify'
import db from './plugin/database'
import route from './route/tempRoute/route'
const app = (opts = {}) => {
  const app = fastify(opts)

  //register plugin
  app.register(db)

  //register route
  app.register(route, { prefix: 'api/v1/test' })
  app.get('/', (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ hello: 'world!' })
  })
  return app
}

export default app

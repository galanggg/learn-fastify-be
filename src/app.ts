import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import db from './plugin/database'
import route from './route/tempRoute/route'
import swaggerPg from './plugin/swagger'
import swaggerPgUi from './plugin/swaggerui'

const app = (opts = {}) => {
  const app = fastify(opts)

  // register plugin
  app.register(db)
  app.register(swaggerPg)
  app.register(swaggerPgUi)

  // register route
  app.register(route, { prefix: 'api/v1/test' })
  app.get('/', (request: any, reply: any) => {
    reply.send({ hello: 'world!' })
  })
  return app
}

export default app

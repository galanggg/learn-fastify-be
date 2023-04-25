import fp from 'fastify-plugin'
import swagger from '@fastify/swagger-ui'
import { FastifyInstance, FastifyPluginOptions } from 'fastify'

const swaggerPgUi = fp(async (fastify: any, options: any, next: any) => {
  await fastify.register(swagger, {
    routePrefix: '/documentation',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
    uiHooks: {
      onRequest (request: any, reply: any, next: any) {
        next()
      },
      preHandler (request: any, reply: any, next: any) {
        next()
      },
    },
    staticCSP: true,
    transformStaticCSP: (header: any) => header,
    transformSpecification: (swaggerObject: any, request: any, reply: any) => swaggerObject,
    transformSpecificationClone: true,
  })
  next()
})

export default swaggerPgUi

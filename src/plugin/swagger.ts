import fp from 'fastify-plugin'
import swagger from '@fastify/swagger'
import { FastifyInstance, FastifyPluginOptions } from 'fastify'

const swaggerPg = fp(async (fastify: any, options: any, next: any) => {
  await fastify.register(swagger, {
    swagger: {
      info: {
        title: 'Fastify Project',
        description: 'Fastify Swagger API',
        version: '0.1.0',
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
      },
      host: 'localhost:5001',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      // tags: [{ name: 'Temp', description: 'User related end-points' }],
      definitions: {
        type: 'object',
        required: ['id', 'title'],
        properties: {
          id: { type: 'string', format: 'uuid' },
          title: { type: 'string' },
        },
      },
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header',
        },
      },
    },
  })
  next()
})

export default swaggerPg

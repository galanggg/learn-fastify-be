import { FastifyInstance } from 'fastify'
import { FromSchema } from 'json-schema-to-ts'
import { post, postResponse, getResponse } from './temp.schema'
import tempService from '../../service/temp.service'

const route = async (fastify: FastifyInstance) => {
  const { getAll, save } = tempService(fastify)
  // GET Route
  fastify.get(
    '/',
    {
      schema: {
        response: getResponse,
      },
    },
    async (request, reply) => {
      const allTest = await getAll()
      reply.code(200).send(allTest)
    },
  )

  // POST Route
  fastify.post<{ Body: FromSchema<typeof post> }>(
    '/',
    {
      schema: {
        body: post,
        response: postResponse,
      },
    },
    async (request: any, reply): Promise<void> => {
      fastify.log.info(`Request with body (${request})`)
      const { title } = request.body
      const id = await save(title)

      reply.code(201).send(id)
    },
  )
}

export default route

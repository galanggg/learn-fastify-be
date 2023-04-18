import { FastifyInstance } from 'fastify'

const tempService = require('../../service/temp.service')

const route = async (fastify: FastifyInstance) => {
  const { getAll, save } = tempService(fastify)
  //GET Route
  fastify.get('/', async (request, reply) => {
    const allTest = await getAll()
    reply.code(200).send(allTest)
  })

  //POST Route
  fastify.post('/', async (request: any, reply) => {
    fastify.log.info(`Request with body (${request})`)
    const { title } = request.body
    const id = await save(title)

    reply.code(201).send(id)
  })
}

module.exports = route

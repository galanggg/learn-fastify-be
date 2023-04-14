const route = async (fastify) => {
  //GET Route
  fastify.get('/', async (request, reply) => {})

  //POST Route
  fastify.post('/', async (request, reply) => {
    fastify.log.info(`Request with body (${request})`)
    const { title } = request.body
    const id = await fastify.db.one(
      'INSERT INTO test(title) VALUES($1) RETURNING id ',
      [title],
    )

    reply.code(201).send(id)
  })
}

module.exports = route

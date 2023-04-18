const Fastify = require('fastify')
const dbPlugin = require('../plugin/database')
const applyMigration = require('../../src/plugin/helper/migration')

jest.mock('../../src/plugin/helper/migration')

describe('database plugin', () => {
  beforeAll(() => {
    applyMigration.mockImplementation(() => jest.fn())
  })

  it('should able to attach db decorate on fastify', () => {
    const fastify = Fastify()
    fastify.register(dbPlugin)

    await fastify.ready()

    expect(fastify.db).toBeDefined()

    await fastify.close()
  })
})

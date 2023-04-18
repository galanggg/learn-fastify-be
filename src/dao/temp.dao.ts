import { FastifyPluginOptions } from 'fastify'

const dao = (fastify: FastifyPluginOptions) => {
  const getAll = () => {
    return fastify.db.query('SELECT * FROM test')
  }
  const save = (title: string) => {
    return fastify.db.one('INSERT INTO test(title) VALUES($1) RETURNING id', [
      title,
    ])
  }
  return { getAll, save }
}

module.exports = dao

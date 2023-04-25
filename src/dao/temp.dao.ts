import { FastifyPluginOptions } from 'fastify'

const dao = (fastify: FastifyPluginOptions) => {
  const getAll = () => fastify.db.query('SELECT * FROM test')
  const save = (title: string) => fastify.db.one('INSERT INTO test(title) VALUES($1) RETURNING id', [
      title,
    ])
  return { getAll, save }
}

export default dao

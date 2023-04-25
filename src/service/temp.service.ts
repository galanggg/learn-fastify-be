import { FastifyInstance } from 'fastify'
import dao from '../dao/temp.dao'

const tempService = (fastify: FastifyInstance) => {
  const tempDao = dao(fastify)
  const getAll = () => tempDao.getAll()
  const save = (title: string) => tempDao.save(title)
  return { getAll, save }
}

export default tempService

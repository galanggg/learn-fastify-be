import { FastifyInstance } from 'fastify'

const tempDao = require('../dao/temp.dao')

const tempService = (fastify: FastifyInstance) => {
  const dao = tempDao(fastify)
  const getAll = () => {
    return dao.getAll()
  }
  const save = (title: string) => {
    return dao.save(title)
  }
  return { getAll, save }
}

module.exports = tempService

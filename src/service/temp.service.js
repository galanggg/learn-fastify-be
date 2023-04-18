const tempDao = require('../dao/temp.dao')

const tempService = (fastify) => {
  const dao = tempDao(fastify)
  const getAll = () => {
    return dao.getAll()
  }
  const save = (title) => {
    return dao.save(title)
  }
  return { getAll, save }
}

module.exports = tempService

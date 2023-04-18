import { FastifyError } from 'fastify'

const DBMigrate = require('db-migrate')

const applyMigration = () => {
  return new Promise((resolve, reject) => {
    const dbMigrate = DBMigrate.getInstance(true)
    dbMigrate.silence(true)

    dbMigrate.up((error: FastifyError, result = []) => {
      if (error) {
        reject(error)
      }
      resolve(result.length)
    })
  })
}

module.exports = applyMigration

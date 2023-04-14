const fp = require('fastify-plugin')
const pgp = require('pg-promise')()
const applyMigration = require('./helper/migration')
const config = require('../config/index')
const db = async (fastify, options, next) => {
  const dbConnection = pgp(config.databaseUri)

  fastify.decorate('db', dbConnection)

  fastify.log.info('Migration is running')
  const migrationCount = await applyMigration()
  fastify.log.info(`Migration applied count: ${migrationCount}`)

  next()
}

module.exports = fp(db)

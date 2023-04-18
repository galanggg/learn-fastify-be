import { FastifyInstance } from 'fastify'

const fp = require('fastify-plugin')
const pgp = require('pg-promise')()
const applyMigration = require('./helper/migration')
const config = require('../config/index')
const db = async (fastify: FastifyInstance, options: any, next: any) => {
  const dbConnection = pgp(config.database_uri)

  fastify.decorate('db', dbConnection)

  fastify.log.info('Migration is running')
  const migrationCount = await applyMigration()
  fastify.log.info(`Migration applied count: ${migrationCount}`)

  next()
}

module.exports = fp(db)

const pgp = require('pg-promise')()
import { FastifyInstance } from 'fastify'
import fp from 'fastify-plugin'
import applyMigration from './helper/migration'
import config from '../config/index'
const db = async (fastify: FastifyInstance, options: any, next: any) => {
  const dbConnection = pgp(config.database_uri)

  fastify.decorate('db', dbConnection)

  fastify.log.info('Migration is running')
  const migrationCount = await applyMigration()
  fastify.log.info(`Migration applied count: ${migrationCount}`)

  next()
}

export default fp(db)

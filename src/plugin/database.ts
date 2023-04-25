import { FastifyInstance } from 'fastify'
import fp from 'fastify-plugin'
import applyMigration from './helper/migration'
import config from '../config/index'
/* eslint-disable @typescript-eslint/no-var-requires */

const pgp = require('pg-promise')()

const db = async (fastify: FastifyInstance, options: any, next: any) => {
  const dbConnection = pgp(config.database_uri)

  fastify.decorate('db', dbConnection)

  fastify.log.info('Migration is running')
  const migrationCount = await applyMigration()
  fastify.log.info(`Migration applied count: ${migrationCount}`)

  next()
}

export default fp(db)

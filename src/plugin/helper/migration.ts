import { FastifyError } from 'fastify'
/* eslint-disable @typescript-eslint/no-var-requires */
const DBMigrate = require('db-migrate')

const applyMigration = () =>
  new Promise((resolve, reject) => {
    const dbMigrate = DBMigrate.getInstance(true)
    dbMigrate.silence(true)

    dbMigrate.up((error: FastifyError, result = []) => {
      if (error) {
        reject(error)
      }
      resolve(result.length)
    })
  })

export default applyMigration

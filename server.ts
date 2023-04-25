import pino from 'pino'
import app from './src/app'
/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

const PORT: number | any = process.env.PORT || 5001
const transport = pino.transport({
  target: 'pino-pretty',
  options: { colorize: true },
})
const logger = pino({ level: 'info' }, transport)
const server = app({
  logger: { logger },
})

const start = async () => {
  try {
    await server.listen({ port: PORT, host: '::' })
  } catch (error) {
    server.log.error(error)
    process.exit(1)
  }
}

start()

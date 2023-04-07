const pino = require('pino')

const PORT = process.env.PORT || 5001
const transport = pino.transport({
  target: 'pino-pretty',
  options: { colorize: true },
})
const logger = pino({ level: 'info' }, transport)

const server = require('./src/app')({
  logger: { logger },
})

const start = async () => {
  try {
    await server.listen(PORT, '0.0.0.0')
  } catch (error) {
    server.log.error(error)
    process.exit(1)
  }
}

start()

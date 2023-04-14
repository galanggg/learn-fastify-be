const loadEnvirontmentVariable = (envName) => {
  if (process.env[envName]) {
    return process.env[envName]
  }

  throw new Error(`${envName}does not exist`)
}

module.exports = {
  databaseUri: loadEnvirontmentVariable('POSTGRES_URI'),
}

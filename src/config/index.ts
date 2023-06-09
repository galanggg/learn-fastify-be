const loadEnvirontmentVariable = (envName: any) => {
  if (process.env[envName]) {
    return process.env[envName]
  }

  throw new Error(`${envName}does not exist`)
}

export default {
  database_uri: loadEnvirontmentVariable('POSTGRES_URI'),
}

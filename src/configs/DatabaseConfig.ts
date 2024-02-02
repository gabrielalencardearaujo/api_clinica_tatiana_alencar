const databaseSQL = {
  host: process.env.HOST,
  name: 'Clinica_Tatiana_Alencar',
  user: 'root',
  password: process.env.PASSWORD,
  port: Number(process.env.port)
}

const databaseDB = {
  uri: process.env.URI_DB || '',
}

export { databaseSQL, databaseDB };
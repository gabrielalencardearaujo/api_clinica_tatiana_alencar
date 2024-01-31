const database = {
  host: process.env.HOST,
  name: 'Clinica_Tatiana_Alencar',
  user: 'root',
  password: process.env.PASSWORD,
  port: Number(process.env.port)
}

export default database;
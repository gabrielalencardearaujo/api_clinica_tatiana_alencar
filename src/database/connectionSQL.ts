import knex from 'knex';
import { databaseSQL } from '@/configs/DatabaseConfig';
console.log(knex)
const connectionDB = knex({
  client: 'mysql2',
  connection: {
    host: databaseSQL.host,
    port: databaseSQL.port,
    user: databaseSQL.user,
    password: databaseSQL.password,
    database: databaseSQL.name
  }
});

export default connectionDB;
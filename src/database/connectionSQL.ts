import knex from 'knex';
import database from '@/configs/DatabaseConfig';
console.log(knex)
const connectionDB = knex({
  client: 'mysql2',
  connection: {
    host : database.host,
    port : database.port,
    user : database.user,
    password : database.password,
    database : database.name
  }
});

export default connectionDB;
import knex from 'knex';
// import { databaseSQL } from '@/configs/DatabaseConfig';

// const connectionDB = knex({
//   client: 'mysql2',
//   connection: {
//     host: databaseSQL.host,
//     port: databaseSQL.port,
//     user: databaseSQL.user,
//     password: databaseSQL.password,
//     database: databaseSQL.name
//   }
// });

const connectionDB = knex({
  client: 'pg',
  connection: {
    host: 'silly.db.elephantsql.com',
    port: 5432,
    user: 'reffrdug',
    password: 'QCe4u9VsI5RCTK7uBZX9lSgQrfswuFF_',
    database: 'reffrdug',
    ssl: true,
  }
});


console.log(knex.Client)
export default connectionDB;
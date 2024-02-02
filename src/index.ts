import { config } from 'dotenv';
config();
import * as express from 'express';
import { router as routes } from './routers/router';
import ServerConfig from './configs/ServerConfig';
import * as bodyParser from 'body-parser';
import mongoose from "mongoose";
import { databaseDB } from './configs/DatabaseConfig';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

mongoose.connect(databaseDB.uri)
  .then(res => {
    console.log(res)
  })
  .catch(err => console.log(err));

app.use(routes);

app.listen(ServerConfig.port, () => console.log(`Listenning on http://localhost:${process.env.PORT}`));

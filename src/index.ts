import { config } from 'dotenv';
config();
import * as express from 'express';
import { router as routes } from './routers/router';
import ServerConfig from './configs/ServerConfig';
import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes);

app.listen(ServerConfig.port, () => console.log(`Listenning on http://localhost:${process.env.PORT}`))

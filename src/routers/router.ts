import AppointmentsController from '@/controllers/AppointmentsController';
import ClientController from '../controllers/ClientController';
import * as express from 'express';
import { RegisterMiddleware } from '@/middlewares/RegisterMiddleware';

const router = express.Router();

// Rotas clientes:
router.get('/clients', ClientController.allClients)
router.get('/client/:id', ClientController.findById);

// Rotas Consultas:
router.get('/appointments', AppointmentsController.allAppo);
router.post('/appointments', RegisterMiddleware, AppointmentsController.register);

export { router };
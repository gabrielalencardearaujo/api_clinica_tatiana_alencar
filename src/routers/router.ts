import * as express from 'express';
import AppointmentsController from '@/controllers/AppointmentsController';
import ClientController from '../controllers/ClientController';
import ProductController from '../controllers/ProductsController';
import { AppointmentMiddleware } from '@/middlewares/RegisterMiddleware';

const router = express.Router();

// Rotas clientes:
router.get('/clients', ClientController.allClients)
router.get('/client/:id', ClientController.findById);

// Rotas Consultas:
router.get('/appointments', AppointmentsController.allItems);
router.get('/appointments/:id', AppointmentsController.findId);
router.post('/appointments', AppointmentMiddleware, AppointmentsController.register);
router.put('/appointments/:id', AppointmentMiddleware, AppointmentsController.update);
router.delete('/appointments/:id', AppointmentsController.delete);

// Rotas de Produtos/Servicos:
router.get('/products', ProductController.allItems);
router.post('/products', ProductController.register);


export { router };
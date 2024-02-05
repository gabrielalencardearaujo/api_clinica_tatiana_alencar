import * as express from 'express';
import AppointmentsController from '@/controllers/AppointmentsController';
import ClientController from '../controllers/ClientController';
import ProductController from '../controllers/ProductsController';
import { AppointmentMiddleware } from '@/middlewares/AppointmentMiddleware';
import UserController from '@/controllers/UserController';
import ProductMiddleware from '@/middlewares/ProductMiddlware';
import VerifyTokenAccessMiddleware from '@/middlewares/VerifyTokenAccessMiddleware';

const router = express.Router();

// Rotas clientes:
router.get('/clients', VerifyTokenAccessMiddleware, ClientController.allItems)
router.get('/client/:id', VerifyTokenAccessMiddleware, ClientController.findById);

// Rotas Consultas:
router.get('/appointments', AppointmentsController.allItems);
router.get('/appointments/:id', AppointmentsController.findId);
router.post('/appointments', AppointmentMiddleware, AppointmentsController.register);
router.put('/appointments/:id', AppointmentMiddleware, AppointmentsController.update);
router.delete('/appointments/:id', AppointmentsController.delete);

// Rotas de Produtos/Servicos:
router.get('/products', ProductController.allItems);
router.get('/products/:id', ProductController.findId);
router.post('/products', VerifyTokenAccessMiddleware, ProductMiddleware, ProductController.register);
router.put('/products/:id', VerifyTokenAccessMiddleware, ProductMiddleware, ProductController.update);
router.delete('/products/:id', VerifyTokenAccessMiddleware, ProductController.delete);

// Rotas de Usuários:
router.post('/login', UserController.login);
router.get('/users', VerifyTokenAccessMiddleware, UserController.allItems);
router.get('/user/:id', VerifyTokenAccessMiddleware, UserController.findById);
router.post('/user', VerifyTokenAccessMiddleware, UserController.register);


export { router };
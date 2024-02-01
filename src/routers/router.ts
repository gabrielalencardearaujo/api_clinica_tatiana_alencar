import ClientController from '../controllers/ClientController';
import * as express from 'express';

const router = express.Router();

// Rotas clientes:
router.get('/clients', ClientController.allClients)
router.get('/client/:id', ClientController.findById);

// Rotas Consultas:
router.get('/appointments', )

export { router };
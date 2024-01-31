import ClientController from '../controllers/ClientController';
import * as express from 'express';

const router = express.Router();

// Todos os clientes:
router.get('/clients', ClientController.allClients)

// Consulta por cliente:
router.get('/client/:id', ClientController.findById);
router.post('/client', ClientController.findOneClient);

export { router };
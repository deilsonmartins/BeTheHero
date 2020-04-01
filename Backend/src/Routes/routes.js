import express from 'express';

import OngController from '../controllers/OngController';

import IncidentsController from '../controllers/IncidentController';

import ProfileController from '../controllers/ProfileController';

import SessionController from '../controllers/SessionController';

const routes = express.Router();

routes.post('/ongs', OngController.create);

routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentsController.create);

routes.get('/incidents', IncidentsController.index);

routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create);

export default routes;

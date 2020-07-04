import { Router } from 'express';

import UserController from './app/controllers/UserController';
import authMiddleware from './app/middlewares/auth';

import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';
import PlanController from './app/controllers/PlanController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/students', StudentController.store);

routes.post('/plans', PlanController.store);
routes.put('/plans/:id', PlanController.update);
routes.get('/plans', PlanController.index);
routes.delete('/plans/:id', PlanController.delete);

export default routes;

import { Router } from 'express';
import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/students', StudentController.store);

export default routes;

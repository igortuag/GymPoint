import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello GymPoint whith sucrase + nodemon' });
});

export default routes;

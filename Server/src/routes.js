import { Router } from 'express';
import User from './app/models/User';
import Student from './app/models/Student';

const routes = new Router();

routes.get('/', async (req, res) => {
  const student = await Student.create({
    name: 'Igor Tuag',
    email: 'igortuag@gmail.com',
    age: 25,
    weight: 70,
    height: 1.68,
  });
  return res.json(student);
});

export default routes;

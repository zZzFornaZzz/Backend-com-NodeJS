import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Servidor ouvindo a porta 5555' });
});

export default routes;

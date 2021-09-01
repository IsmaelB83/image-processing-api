import { Router } from 'express';
import controller from '../controllers';

const routes = Router();

routes.use('/images', controller);

export default routes;

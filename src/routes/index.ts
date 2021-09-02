// Node imports
import { Router } from 'express';
// Own imports
import controller from '../controllers';

const routes = Router();

routes.use('/images', controller);

export default routes;

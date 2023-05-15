
import {Router} from 'express';
import * as controllers from '../controllers/projects-api-controllers.js';

const route = Router();

route.get('/view', controllers.getProducts);
route.post('/view', controllers.createProject);
route.get('/view/:idProyect', controllers.getProjectId);
route.patch('/view/:idProyect', controllers.updateProjectId);
route.delete('/view/:idProyect', controllers.deleteProjectId);

export default route;
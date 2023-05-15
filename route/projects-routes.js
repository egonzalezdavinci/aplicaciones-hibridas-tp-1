import express from 'express';
import * as controllers from '../controller/project-controller.js';
import path from 'node:path';
const route = express.Router()


route.get('/', controllers.getMenuSlug);

route.get('/view/nuevo', controllers.createProjectFormPage);
route.post('/view/nuevo', controllers.createProject);
route.get('/:slug', controllers.getProductoSlug);
route.get('/view/:idProyect/edit', controllers.editProjectForm);
route.post('/view/:idProyect/edit', controllers.editProject);
route.get('/view/:idProyect/delete', controllers.deleteProjectForm);
route.post('/view/:idProyect/delete', controllers.deleteproject);
route.get('/view/:idProyect', controllers.getProductId);

export default route
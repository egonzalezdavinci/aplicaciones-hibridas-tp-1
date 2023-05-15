import express from 'express';
import routeProject from './route/projects-routes.js';
import projectRouteApi from './api/routers/project-api-routers.js';

const app = express();

app.use(express.urlencoded({extended:true}));
app.use('/api', express.json());
app.use('/',express.static('view'));

app.use('/', routeProject);
app.use('/api', projectRouteApi);


app.listen(2222, function(){
    console.log('Servidor ok http://localhost:2222');
})
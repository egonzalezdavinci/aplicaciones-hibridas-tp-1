import * as generatorHtml from '../pages/utils.js';
import * as services from '../services/proyect-services.js';
import * as views from '../view/project-view.js';

function getMenuSlug(req,res){
    services.getMenu().then(function(product){
        res.send(views.createMenu(product));
    });
}

function getProductoSlug(req, res){
    let slug = req.params.slug; 

    services.getProducts({deleted: true}).then(function(products){
        res.send(views.viewProjects(products,slug));
    });
}

function getProductId(req,res){
    let id = req.params.idProyect; 

    services.getProductById(id)
        .then(function (product) {
            if (product) {
                res.send(views.viewProject(product))
            }
            else {
                res.send(generatorHtml.contentHtmlProject('pagina no encontrada','Lamentablente no encontramos el producto que estas buscando.'))
            }
        })
}

function createProjectFormPage(req,res){
    res.send(views.createProjectForm());
}

function createProject(req, res){
    const product = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: 'https://picsum.photos/250/200',
        technologies: [req.body.bootstrap, req.body.html, req.body.vue, req.body.php, req.body.javascript, req.body.laravel],
        section: req.body.section
    }

    services.createProject(product).then(function(newProject){
        res.send(generatorHtml.contentHtmlProjects('El producto se creó exitosamente','gracias'));
    }).catch(function(err){return [];});

}

function editProjectForm(req, res){
    const id = req.params.idProyect;

    services.getProductById(id)
        .then(function (product) {
            if (product) {
                res.send(views.viewProjectEdit(product))
            }
            else {
                res.send(generatorHtml.contentHtmlProject('pagina no encontrada','Lamentablente no encontramos el producto que estas buscando.'))
            }
        })
}

function editProject(req, res){
    const id = req.params.idProyect;
    const product = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: 'https://picsum.photos/250/200',
        technologies: [req.body.bootstrap, req.body.html, req.body.vue, req.body.php, req.body.javascript, req.body.laravel],
        section: req.body.section
    }

    services.editProjectConfirm(id, product).then(function(newProject){
        res.send(generatorHtml.contentHtmlProjects('El producto se modificó exitosamente','gracias'));
    }).catch(function(err){return [];});
}

function deleteProjectForm(req, res){
    const id = req.params.idProyect;

    services.getProductById(id)
        .then(function (product) {
            if (product) {
                res.send(views.viewProjectDelete(product))
            }
            else {
                res.send(generatorHtml.contentHtmlProject('pagina no encontrada','Lamentablente no encontramos el producto que estas buscando.'))
            }
        })
}

function deleteproject(req, res){
    const id = req.params.idProyect;
    services.deleteProject(id).then(function(product){
        if(product){
            res.send(generatorHtml.contentHtmlProject('El producto se eliminó exitosamente','gracias'));
        }else{
            res.send(generatorHtml.contentHtmlProject('El producto no pudo eliminarse','Vuelva a intentar'));
        }
    });
}

export{
    getMenuSlug,
    getProductoSlug,
    getProductId,
    createProject,
    editProjectForm,
    editProject,
    deleteProjectForm,
    deleteproject,
    createProjectFormPage
}
import { contentHtml } from "../pages/utils.js";
import * as generatorHtml from '../pages/utils.js';
import * as services from '../services/proyect-services.js';

function createMenu(product){
    let html = `<ul class="items-menu">`;
        for(let i = 0; i < product.length; i++){
            html += `<li><a href="${product[i].slug}">${product[i].name}</a></li>`;
        }
        html += `</ul>`;
        html += `<div><a class="btn-default" href="/view/nuevo">Crear Nuevo Proyecto</a></div>`;
        return generatorHtml.contentHtml('Proyectos Digitales',html);
}

function viewProjects(products,slug){
    let project = services.getProductSlug(products,slug);
    let html = '';
    
    if(project.length === 0){
        return generatorHtml.contentHtmlProjects('pagina no encontrada', 'No encontramos el producto que estas buscando.');
    }else{
        for(let i = 0; i < project.length; i++){
            html += `<h2>${project[i].name}</h2>`;
            html += `<ul>`;
            html += `<li><p>${project[i].description}</p></li>`;
            html += `<li><a href="view/${project[i]._id}">Ver Proyecto</a></li>`;
            html += `</ul>`;
        }
        return generatorHtml.contentHtmlProjects('Ver proyectos', html);
    }
}

function viewProject(products){

    if(products){
            let titulo = products.name;
            let html = `<h2>${products.name}</h2>`;
            html += `<ul>`;
            html += `<li><p>${products.description}</p></li>`;
            html += `<li><img src="${products.img}" alt="${products.name}"/></li>`;
            html += `<li><p>${products.link}</p></li>`;
            html += `<li><p>${products.technologies}</p></li>`;
            html += `<li><a href="/view/${products._id}/edit">Editar</a></li>`;
            html += `<li><a href="/view/${products._id}/delete">Eliminar</a></li>`;
            html += `</ul>`;

            return generatorHtml.contentHtmlProject(titulo,html);
    }else{
            return generatorHtml.contentHtmlProject('pagina no encontrada','Lamentablente no encontramos el producto que estas buscando.');
    }
}

function viewProjectEdit(project){

    if(project){
            let titulo = project.name;
            let checkTec = project.technologies;
            let html = `<h2>Editar ${project.name}</h2>`;
            
            html += `<form action="/view/${project._id}/edit" method="POST" >`;
            html += `<div class="mb-3"><label for="name">Nombre</label><input type="text" value="${project.name}" name="name" id="name" /></div>`;
            html += `<div class="mb-3"><label for="description">Descripción</label><input type="text" value="${project.description}" name="description" id="description" /></div>`;
            html += `<div class="mb-3"><label>Link</label><input type="text" value="${project.link}" name="link" id="link" /></div>`;
            html += `<div class="mb-3"><label>Tecnologías Seleccionadas</label></div>`;
            html += `<div class="mb-3">`;
            for(let i = 0; i < checkTec.length; i++){
                if( !(checkTec[i] === null)){
                    html += `<label>${checkTec[i]}</label> `;
                }
            }
            html += `</div>`;
            html += `<div>
            <input type="checkbox" id="bootstrap" name="bootstrap" value="Bootstrap" />
            <label for="bootstrap">Bootstrap</label>
            </div>
            <div>
            <input type="checkbox" id="html" name="html" value="HTML5" />
            <label for="html">HTML5</label>
            </div>
            <div>
            <input type="checkbox" id="vue" name="vue" value="Vue.js" />
            <label for="vue">Vue.js</label>
            </div>
            <div>
            <input type="checkbox" id="php" name="php" value="PHP" />
            <label for="php">PHP</label>
            </div>
            <div>
            <input type="checkbox" id="javascript" name="javascript" value="Javascript" />
            <label for="javascript">Javascript</label>
            </div>
            <div>
            <input type="checkbox" id="laravel" name="laravel" value="Laravel" />
            <label for="laravel">Laravel</label>
            </div>`;
            
            html += `<div><p>Categoria elegida: ${project.section}</p></div>`;
            html += `<div class="mb-3"><label for="section">Cambiar categoría</label>
            <select name="section" id="section">
                <option value="games">Games</option>
                <option value="mobile">Mobile</option>
                <option value="landingpage">LandingPage</option>
                <option value="webapp">Web App</option>
                <option value="ecommerce">E-commerce</option>
            </select></div>`;
            html += `<button type="submit">Guardar cambios</button>`;
            html += `</form>`;
            return generatorHtml.contentHtmlProject(titulo,html);
    }else{
            return generatorHtml.contentHtmlProject('pagina no encontrada','Lamentablente no encontramos el producto que estas buscando.');
    }
}

function createProjectForm(){
    let titulo = 'Crear nuevo projecto';
    let html = `<form action="/view/nuevo" method="POST" >`;
    html += `<div class="mb-3"><label for="name">Nombre</label><input type="text" value="" name="name" id="name" /></div>`;
    html += `<div class="mb-3"><label for="description">Descripción</label><input type="text" value="" name="description" id="description" /></div>`;
    html += `<div class="mb-3"><label for="link">Link</label><input type="text" value="" name="link" id="link" /></div>`;
    html += `<div class="mb-3"><label>Tecnologías</label>
        <div>
        <input type="checkbox" id="bootstrap" name="bootstrap" value="Bootstrap" />
        <label for="bootstrap">Bootstrap</label>
        </div>
        <div>
        <input type="checkbox" id="html" name="html" value="HTML5" />
        <label for="html">HTML5</label>
        </div>
        <div>
        <input type="checkbox" id="vue" name="vue" value="Vue.js" />
        <label for="vue">Vue.js</label>
        </div>
        <div>
        <input type="checkbox" id="php" name="php" value="PHP" />
        <label for="php">PHP</label>
        </div>
        <div>
        <input type="checkbox" id="javascript" name="javascript" value="Javascript" />
        <label for="javascript">Javascript</label>
        </div>
        <div>
        <input type="checkbox" id="laravel" name="laravel" value="Laravel" />
        <label for="laravel">Laravel</label>
        </div>`;
    html += `<div class="mb-3"><label for="section">Categoría</label>
    <select name="section" id="section">
        <option value="games">Games</option>
        <option value="mobile">Mobile</option>
        <option value="landingpage">LandingPage</option>
        <option value="webapp">Web App</option>
        <option value="ecommerce">E-commerce</option>
    </select></div>`;
    html += `<button type="submit">Crear Nuevo proyecto</button>`;
    html += `</form>`;
    return generatorHtml.contentHtml(titulo, html);
}


function viewProjectDelete(project){

    if(project){
            let titulo = project.name;
            let html = `<h2>¿Desea eliminar ${project.name}?</h2>`;
            html += `<ul>`;
            html += `<li><p>${project.description}</p></li>`;
            html += `<li><img src="${project.img}" alt="${project.name}"/></li>`;
            html += `<li><p>${project.link}</p></li>`;
            html += `<li><p>${project.technologies}</p></li>`;
            html += `</ul>`;
            html += `<form action="/view/${project._id}/delete" method="POST">
            <button type="submit">Eliminar</button></form>`;

            return generatorHtml.contentHtmlProject(titulo,html);
    }else{
            return generatorHtml.contentHtmlProject('pagina no encontrada','Lamentablente no encontramos el producto que estas buscando.');
    }
}

export{
    createMenu,
    viewProjects,
    viewProject,
    createProjectForm,
    viewProjectEdit,
    viewProjectDelete,
    contentHtml
}


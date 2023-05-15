import { readFile, writeFile } from 'node:fs/promises';
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("AH20231CP1");

async function getMenu(){
    return readFile("./data/menu-project.json").then(function(data){
        return JSON.parse(data);
    }).catch(function(errs){
        return [];
    })
}

async function getProducts(filter = {}){
await client.connect();
return db.collection("Projects").find({deleted: {$ne:true}}).toArray();
}

function getProductSlug(products, slug){
    let project = [];

    for(let i = 0; i < products.length; i++){
        if(products[i].section === slug){
            project.push(products[i]);
        }
    }
    return project;
}


async function getProduct(products, idProyect){
await client.connect();
return db.collection("Projects").findOne({ _id: new ObjectId(idProyect)});
}

async function getProductById(id) {
    await client.connect();
    return db.collection("Projects").findOne( {_id: new ObjectId(id)} );
}

async function guardarProject(product){
    return writeFile('./data/product-proyect.json', JSON.stringify(product));
}

async function createProject(product){
    await client.connect();
    await db.collection("Projects").insertOne(product);
    return product;
}

async function editProjectConfirm(idProyect, product){

    await client.connect();
    await db.collection("Projects").replaceOne({ _id: new ObjectId(idProyect)}, product);
    return product
}

async function deleteProject(idProyect){
    await client.connect();
    await db.collection("Projects").deleteOne({ _id: new ObjectId(idProyect)});
    return {
        id: idProyect
    }
}


export{
    getProducts,
    getProductSlug,
    getProductById,
    getMenu,
    createProject,
    editProjectConfirm,
    deleteProject,
    guardarProject,
    getProduct
}
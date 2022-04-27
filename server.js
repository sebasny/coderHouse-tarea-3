const express = require('express');
const contenedor = require('./contenedor/tarea.js');



const PORT = 8080;

const app = express();

const server = app.listen(PORT,() =>{
    console.log('listening on port')
});

app.get('/productos', (req, res) =>{
    res.send(getAll());
});

app.get('/productoRandom', (req, res) =>{
    res.send(getAllRandom());
});

app.get('/', (req, res) =>{
    res.send({mensaje:'welcome to my page'});
});


function getAllRandom(){
        

    try {
        let file = fs.readFileSync(this.archive, 'utf-8');
        let productosArray = JSON.parse(file)

        let randomValue = productosArray[Math.floor(productosArray.length * Math.random())]
        return randomValue
        


    }catch(err){
        console.log(err);
    }}

function getAll(){

        try {
            let file = fs.readFileSync(this.archive, 'utf-8');
            let productosArray = JSON.parse(file)
            console.log(productosArray);

    }catch(err){
        console.log(err);
    }}


module.exports = contenedor

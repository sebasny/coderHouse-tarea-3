const fs = require('fs');

const productoUNO = {title: 'casa', price: 999, foto: 'https://www.google.cl/'};
const productoDOS = {title: 'auto', price: 99999, foto: 'https://www.tumblr.cl/'};
const productoTRES = {title: 'celular', price: 5555555555, foto: 'https://www.youtube.cl/'};

class Contenedor{
    constructor(){
        this.archive = new ('./contenedor/archive.js') 
        this.id = 1
    }

    save(objects) {
        objects.id = this.id++
        let productosArray= [];
    
        try{
    
            let file =  fs.readFileSync(this.archive, 'utf-8');
            productosArray = JSON.parse(file);
    
        }catch(err){
            console.log('no existe el archivo')
        }
    
        productosArray.push(objects);
        fs.writeFileSync(this.archive, JSON.stringify(productosArray, null, 2));
        
    }
    getAll(){

        try {
            let file = fs.readFileSync(this.archive, 'utf-8');
            let productosArray = JSON.parse(file)
            console.log(productosArray);

    }catch(err){
        console.log(err);
    }
}

    deleteById(id){

        let num = id - 1

        try{
            let file = fs.readFileSync(this.archive, 'utf-8');
            let productosArray = JSON.parse(file)

            productosArray.splice(num, 1,)

            console.log(productosArray)
                
            fs.writeFileSync(this.archive, JSON.stringify(productosArray, null, 2));
            


        }catch(err){
            console.log(err);
        }
    }


    deleteAll(){
        try{
            fs.writeFileSync(this.archive, '')
            console.log('Borrado')
        }catch(err){
            console.log(err);
        }
    }

    getAllRandom(){
        

        try {
            let file = fs.readFileSync(this.archive, 'utf-8');
            let productosArray = JSON.parse(file)

            let randomValue = productosArray[Math.floor(productosArray.length * Math.random())]
            return randomValue
            
   

        }catch(err){
            console.log(err);
        }
        

    }
   
};

let contenedor = new Contenedor()



contenedor.save(productoUNO)
contenedor.save(productoDOS)
contenedor.save(productoTRES)

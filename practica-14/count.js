const { error } = require('console')
const fs = require('fs')
const filename = './vehiculos.json'

const Contar =()=>{

    fs.readFile(filename,'utf8',(error,data)=>{
        if(error){
            console.error('error al leer el archivo',error)
            return;
        }
    
        const vehiculos = JSON.parse(data)
        console.log('la flota de vehiculos es de:',vehiculos.length)
        
    })
}

module.exports= Contar
const fs = require('fs')

const filename = './veiculos.json'

fs.readFile(filename,'utf8',(error ,data)=>{
    if(error){
        console.log("Error al leer el archivo JSOn: ",error)
        return;
    }try{
        const ObjetoJson = JSON.parse(data)
        console.log("Flota de vehiculos: ",ObjetoJson)
    }catch(error){
        console.error("error al Parsear el archivo JSOn")
    }
})
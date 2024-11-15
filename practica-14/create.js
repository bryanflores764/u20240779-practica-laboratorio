const { error } = require('console')
const fs = require('fs')

const filename = "./vehiculos.json"
const Crear =()=>{
    const vehiculos = [
        {id:1, marca:'toyota',modelo:'corolla',año: 2020},
        {id:2, marca:'honda',modelo:'civic',año: 2019},
        {id:3, marca:'ford',modelo:'focus',año: 2021}
    
    ]
    
    
    fs.writeFile(filename,JSON.stringify(vehiculos,null,2),(error)=>{
        if(error){
            console.log('Error al crear el archivo JSON: ',error)
        }else{
            console.log('Archivo creado exitosamente con tres vehiculos iniciales')
        }
    });
}

module.exports= Crear

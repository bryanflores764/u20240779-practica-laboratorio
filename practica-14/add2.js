const { error } = require('console')
const fs = require('fs')
const { json } = require('stream/consumers')

const filename = './veiculos.json'

fs.readFile(filename,'utf8',(error,data)=>{
    if(error){
        console.error("error el leer el archivo JSON",error)
        return;
    }
        const vehiculos = JSON.parse(data)
        const nuevosVehiculo = {id:4 ,marca:'Nissan' ,modelo:'datsun',año:2030}
        vehiculos.push(nuevosVehiculo)

        fs.writeFile(filename,JSON.stringify(vehiculos,null,2),(error)=>{
            if(error){
                console.error('Error al ecribir el archivo JSOn',error)
                return
            }

            console.log('Nuevo vehioculo agregado al Archivo JSOn')
            
        })
    
})
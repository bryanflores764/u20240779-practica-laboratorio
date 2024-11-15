const { error } = require('console')
const fs = require('fs')


const Modificar =()=>{
    const filename = './vehiculos.json'
    fs.readFile(filename,'utf8',(error,data)=>{
        if(error){
            console.error("error al leer el archivo JSON: ",error)
            return;
        }try{
           const objetoJSon= JSON.parse(data)
           const idModificar = 2;
    
           const indice = objetoJSon.findIndex((objetoJSon)=> objetoJSon.id === idModificar)
           objetoJSon[indice].año = 2029;
    
           fs.writeFile(filename,JSON.stringify(objetoJSon,null,2),(error)=>{
            if(error){
                console.error('error al modificar el archivo JSOn:',error)
                return;
            }else{
                console.log("año del vehiculo modificado exitosamente")
            }
           });
        }catch(error){
            console.error("Error al parsear el archivo JSOn",error)
    
        }
    })
}

module.exports= Modificar


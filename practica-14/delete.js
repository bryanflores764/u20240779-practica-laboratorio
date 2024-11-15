const fs = require('fs');
const filename ='./vehiculos.json'

const Borrar =()=>{
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) return console.error('Error al leer:', err);
      
        try {
          const vehiculos = JSON.parse(data);
          const indice = vehiculos.findIndex(v => v.id === 2);
          vehiculos.splice(indice, 1);
          fs.writeFile(filename, JSON.stringify(vehiculos, null, 2), err => {
            if (err) console.error('Error al escribir:', err);
            else console.log('Vehículo eliminado');
          });
        } catch (error) {
          console.error('Error al parsear:', error);
        }
      });
}

module.exports= Borrar


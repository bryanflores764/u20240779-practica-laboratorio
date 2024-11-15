const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Crear = require("./create");
const Leer = require("./add");
const Agregar = require("./add2");
const Modificar = require("./Create2");
const Borrar = require("./delete");
const { setTimeout } = require("timers/promises");

const showMenu = () => {
  console.log("\n----- Menú -----");
  console.log("1. Crear archivo JSON");
  console.log("2. Leer archivo JSON");
  console.log("3. Agregar vehículo");
  console.log("4. Modificar vehículo");
  console.log("5. Eliminar vehículo");
  console.log("6. Salir");
};

 const MenuOpcion =(opcion)=>{
    switch (parseInt(opcion)) {
        case 1:
          Crear()
          rl.close()
          break;
        case 2:
          Leer()
          break;
        case 3:
          Agregar()
          break;
        case 4:
          Modificar()
          break;
        case 5:
          Borrar()
          break;
        case 6:
          console.log("saliendo del programa");
          rl.close()
          return;
        default:
          console.log("Opcion inavlida intentelo de nuevo");
      }

      setTimeout(SelecionOpcion,100)
      
 }


 const SelecionOpcion =()=>{
    showMenu()
    rl.question("selecione una opcion: ", MenuOpcion)
 }

 SelecionOpcion()

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const ContrasenaCorrecta = "1234";

const PedirContrasena = () =>{
  rl.question("Introduce la contraseña: ", (ContrasenaIntroducida) => {
    if (ContrasenaIntroducida !== ContrasenaCorrecta) {
      console.log("Contraseña incorrecta. Inténtalo de nuevo.");
      PedirContrasena(); 
    } else {
      console.log("¡Bienvenido! Has introducido la contraseña correcta.");
      rl.close();
    }
  });
}


PedirContrasena();
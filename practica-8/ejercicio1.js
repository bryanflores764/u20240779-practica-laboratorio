const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const MostarMenu = () => {
  rl.question(
    "1.- Escribir\n2. - Leer\n3 - Salir\nEscoge una opcion: ",
    (opcion) => {
      switch (parseInt(opcion)) {
        case 1:
          console.log("Opcion 1: eliges escribir");
          MostarMenu();
          break;
        case 2:
          console.log("Opcion 2: eliges leer");
          MostarMenu();
          break;
        case 3:
          console.log("Fin del programa");
          rl.close();
          break;
        default:
          console.log("debes elegir una de las opciones valida");
          MostarMenu()
          break;
      }
    }
  );
};

MostarMenu()

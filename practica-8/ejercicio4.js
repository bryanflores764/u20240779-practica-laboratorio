const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// const Numeroaleatorio = "15";
// const PedirNumero = () =>{
//     rl.question("Adivina en el numero que pienso ", (NumeroUsuario) => {
//        if(NumeroUsuario !== Numeroaleatorio){
//         console.log("lociento pero el numero que ingresaste no es en el que estaba pensando intentalo nuevamente.");
//             PedirNumero();
//        }else{
//         console.log('Felicidades adivinaste el numero muchas gracias por participar');
//        }
//        rl.close();
//     });
// }


// PedirNumero ();

// quiero que revise bien el codigo de arriba por que es exatamente al de abajo pero el dea arriba no funciona y el de abajo si 


const Numeroaleatorio = "15";
const PedirNumero  = () =>{
    rl.question("Adivina en el numero que pienso ", (NumeroUsuario) => {
      if ( NumeroUsuario !==  Numeroaleatorio ) {
        console.log("lociento pero el numero que ingresaste no es en el que estaba pensando intentalo nuevamente.");
            PedirNumero(); 
      } else {
        console.log("Felicidades adivinaste el numero muchas gracias por participar");
        rl.close();
      }
    });
  }
  
  
  PedirNumero ();
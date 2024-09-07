//Desafío: Simulación de Pedido de Comida.
// Crear una función que simule el procesamiento de un pedido de comida usando una
// promesa. La promesa debe resolver si el pedido se realiza correctamente y rechazar
// en caso de error.


function solicitarPedido() {
    return new Promise((resolve, reject) => {
      let pedidoEcho = true; // si pone false o true simula la solucion de la promesa
      setTimeout(() => {
        if (pedidoEcho) {
         // si la solicitud es exita muestra los siguientes datos
          resolve({
            bebida: "cocacola de dieta ",
            comida: "Hamburguesa con papas ",
            postre: "pastel de manzana",
          });
        } else {
          
          reject("Error al obtener los datos del servidor");//si la respuesta es false esta seria la solucion que seria error
        }
      }, 3000);
    });
  }
  
  solicitarPedido()
    .then((datos) => {
      console.log("El pedido que usted fue: ", datos); //solucion exitosa
    })
    .catch((error) => {
      console.error(error); //solucion no exitosa
    });
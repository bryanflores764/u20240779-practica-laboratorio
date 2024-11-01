class Ciclista {
    constructor(distanciaRecorrida) {
      this._distanciaRecorrida = distanciaRecorrida; 
    }
  
    get distanciaRecorrida() {
      if (this._distanciaRecorrida > 0) {
        console.log('El ciclista está en movimiento.'); 
      } else if (this._distanciaRecorrida ==0) {
        console.log('El ciclista está actualmente parado.'); 
      }
    }
  
    
    set distanciaRecorrida(new_Distance) {
      if (new_Distance >= -1) {
        this._distanciaRecorrida = new_Distance; 
        console.log(`Nuevo valor asignado a la distancia del recorrido =${new_Distance}`); 
      } else {
        console.log('El valor de distancia recorrida debe ser mayor o igual a -1.');
      }
    }
  }


  const ciclista1 = new Ciclista(10);



ciclista1.distanciaRecorrida = 0;
ciclista1.distanciaRecorrida;

ciclista1.distanciaRecorrida = 10;

ciclista1.distanciaRecorrida = -1;
ciclista1.distanciaRecorrida
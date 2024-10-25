class Persona {
    constructor(Nombre, Apellido) {
      this._Nombre = Nombre;
      this._Apellido = Apellido;
    }
  
    //metodo get para obtener nombre
  
    get NombreCompleto(){
      return `${this._Nombre} ${this._Apellido}`
    }

    //Metodo set para cambiar el nombre el nombre y el apeliido

    set NombreCompleto(NombreCompleto){
        [this._Nombre,this._Apellido] = NombreCompleto.split(" ")
    }


  
  
  }
  
  
  const Persona1 = new Persona("Bryan","Ronaldo");
  Persona1.NombreCompleto="Ronaldo Aviles"
  console.log(`Nombre completo: ${Persona1.NombreCompleto}`)
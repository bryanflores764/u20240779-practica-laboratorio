class Persona {
  constructor(Nombre, Apellido) {
    this._Nombre = Nombre;
    this._Apellido = Apellido;
  }

  //metodo get para obtener nombre

  get NombreCompleto(){
    return `${this._Nombre} ${this._Apellido}`
  }


}


const Persona1 = new Persona("Bryan","Ronaldo");

console.log(`Nombre completo: ${Persona1.NombreCompleto}`)
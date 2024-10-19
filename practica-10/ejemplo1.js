class Persona{
    constructor(Edad,Nombre){
        this._Edad = Edad;
        this._Nombre = Nombre;
    }

    InfoPersona(){
        return (`Hola mi Nombre es: ${this._Nombre} Y tengo ${this._Edad} de edad`)
    }
}

let persona1 = new Persona(18,`Nancy`)

console.log(persona1)
console.log(persona1.InfoPersona())
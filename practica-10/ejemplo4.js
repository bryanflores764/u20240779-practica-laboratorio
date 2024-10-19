class Animal {
    constructor(Nombre){
        this._Nombre = Nombre;
    }

    HacerSonido(){
        console.log(`${thid._Nombre} Hace un sonido`)
    }
}

class Perro extends Animal{
    HacerSonido(){
        console.log(`${this._Nombre} ladra`)
    }
}

let perro1 = new Perro(`Rex`) 

perro1.HacerSonido()
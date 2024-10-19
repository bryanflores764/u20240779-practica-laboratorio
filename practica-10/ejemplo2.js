class Coche{
    constructor(Marca,Modelo){
        this._Marca = Marca;
        this._Modelo = Modelo;
    }

    Encendido(){
        console.log(`${this._Marca} ${this._Modelo} Esta encendido`)
    }
    Apagado(){
        console.log(`${this._Marca} ${this._Modelo} Esta Apagado`)
    }
}

let Carro1 = new Coche(`Nissan`,`Datsunt `)

Carro1.Encendido()
Carro1.Apagado()
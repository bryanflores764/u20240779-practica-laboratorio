class CuentaBancaria{
    constructor(Saldo){
        this._Saldo=Saldo
    }

    get Saldo(){
        return this._Saldo
    }

    set Saldo(cantidad){
        if(cantidad>=0){
            this._Saldo = cantidad;
        }else{
            console.log(`Saldo: '${cantidad}' , nose puede stablecer un saldo negativo`)
        }
    }
}

const cuenta = new CuentaBancaria(1000)

console.log(`Saldo incial: ${cuenta.Saldo}`)

cuenta.Saldo = 500
console.log(`Movimiento : ${cuenta.Saldo}`)

cuenta.Saldo = -500
console.log(`Saldo Actual : ${cuenta.Saldo}`)
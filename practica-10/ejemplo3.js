class CuentaDeAhorros {
    constructor(titular,saldo){
        this.Titular = titular;
        this.Saldo = saldo;
    }

    static TipoDeCuenta(){
        return `Cuenta de ahorros`
    }

    ImprimirInfo(){
        console.log(`Titular: ${this.Titular}, Saldo: ${this.Saldo}`)
    }

}

let Cuenta1 = new CuentaDeAhorros(`Bryan`,3500)

Cuenta1.ImprimirInfo()
console.log(CuentaDeAhorros.TipoDeCuenta())
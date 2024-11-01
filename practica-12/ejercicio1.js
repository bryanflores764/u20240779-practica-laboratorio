class Articulo {
    constructor(Nombre,Precio,Stock){
        this._Nombre = Nombre;
        this._Precio = Precio;
        this._Stock = Stock;
    }
comprar(Cantidad){
    if(Cantidad >0 && this._Stock > 0 && this._Stock - Cantidad >=0){
        this._Stock -= Cantidad;
        let total = Cantidad * this._Precio;

        if(Cantidad >1){
            console.log(`Usted ha comprado ${Cantidad} Unidades del producto ${this._Nombre} - Total: ${total}`)
        }else{
            console.log(`Usted ha comprado ${Cantidad} Unidades del producto ${this._Nombre} - Total: ${total}`)
        }
    }else if(this._Stock <=0){
        console.log(`El producto ${this._Nombre} actualmente esta pagado,`)
    }else if(this._Stock - Cantidad < 0){
    console.log(`La cantidad que quiere comprar es demaciada actualmente solo hay ${this._Stock} unidades de producto ${this._Nombre}`)
    }else {
        console.log(`la cantidad del producto a comprar debe ser mayor a 0`)
    }
}


reabastecer(Cantidad){
    if(Cantidad >0){
        this._Stock += Cantidad
        console.log(`Reabastecer el stock - Cantidad disponible del producto ${this._Nombre} = ${this._Stock}`)
    }
}

}


const ART = new Articulo("Jabon",20,10)

ART.comprar(11)
ART.comprar(1)

ART.reabastecer(20)
ART.comprar(15)
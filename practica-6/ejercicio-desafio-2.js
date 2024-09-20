// 2. Crea un programa en JavaScript que solicite al usuario ingresar un
// número del 1 al 12. Utiliza una estructura switch para determinar el
// nombre del mes correspondiente al número ingresado. Si el número
// está fuera del rango 1-12, muestra un mensaje indicando que el
// número no es válido.

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const mostarMesSegunUsuario = () => {
    rl.question(`Escriba el numero del mes que quiere saber recordar que los meses son del 1-12: `, (mes) => {
        let numeromes2 = parseFloat(mes)
        switch (numeromes2) {
            case 1:
                console.log(`El mes numero ${numeromes2}: es Enero`)
                break;
            case 2:
                console.log(`El mes numero ${numeromes2}: es Febrero`)
                break;
            case 3:
                console.log(`El mes numero ${numeromes2}: es Marzo`)
                break;
            case 4:
                console.log(`El mes numero ${numeromes2}: es Abril`)
                break;
            case 5:
                console.log(`El mes numero ${numeromes2}: es Mayo`)
                break;
            case 6:
                console.log(`El mes numero ${numeromes2}: es Junio`)
                break;
            case 7:
                console.log(`El mes numero ${numeromes2}: es Julio`)
                break;
            case 8:
                console.log(`El mes numero ${numeromes2}: es Agosto`)
                break;
            case 9:
                console.log(`El mes numero ${numeromes2}: es Septiembre`)
                break;
            case 10:
                console.log(`El mes numero ${numeromes2}: es Octubre`)
                break;
            case 11:
                console.log(`El mes numero ${numeromes2}: es Noviembre`)
                break;
            case 12:
                console.log(`El mes numero ${numeromes2} es Diciembre`)
                break;
            default:
                console.log(`Escriba un numero valido`)
                break;
        }
        rl.close()
    })
}
mostarMesSegunUsuario()
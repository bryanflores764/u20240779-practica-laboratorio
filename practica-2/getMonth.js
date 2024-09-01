//objeto para mes actual
let mes = new Date()
//obtener el mes actual
let mes_actual = mes.getMonth()
//de aqui obtendremos los meses
let meses = ["enero","febrero", "marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
//mostrando mes Actual
let meses2 = meses[mes_actual]

console.log(`Su mes actual es: ${meses2}`)

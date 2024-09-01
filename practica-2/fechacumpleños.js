let fechaNacimiento = new Date('1999-08-18')
//naciste un martes, 18 de Agosto
let dia_semana =["domingo","lunes","martes","miercoles","jueves","viernes","sabado"]
let meses = ["enero","febrero", "marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]

let dia = dia_semana[fechaNacimiento.getDay()]
let dia2 = fechaNacimiento.getDate()
let mes = meses[fechaNacimiento.getMonth()]


console.log(`Naciste un: ${dia}, ${dia2 + 1} de ${mes}`)
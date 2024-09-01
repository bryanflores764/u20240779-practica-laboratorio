//mostrar fecha
// la fecha de hoy es 23/08/2024

let dia = new Date()
let diaHoy = dia.getDate()
let mes = new Date()
let mes1= mes.getMonth() + 1
let year = new Date()
let year_2 = year.getFullYear()

console.log(`La fecha de hoy es: ${diaHoy}/0${mes1}/${year_2}`)
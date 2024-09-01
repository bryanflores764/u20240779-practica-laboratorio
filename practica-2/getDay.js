let dia = new Date();
//obtener dia de la semana
let diaSemana = dia.getDay();
// arreglo de dias de la semana 
let dia_semana =["domingo","lunes","martes","miercoles","jueves","viernes","sabado"]
//obtener el nombre del dia de la semana
let nombreDia = dia_semana[diaSemana]
console.log(`Hoy es: ${nombreDia}`)
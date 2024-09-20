// Crea un programa en JavaScript que solicite al usuario ingresar su
// edad. Luego, utiliza una estructura selectiva (if-else if-else) para
// verificar la edad y determinar si la persona es un niño (0-12), un
// adolescente (13-17), un adulto joven (18-35), un adulto (36-59), o un
// adulto mayor (60 en adelante). Finalmente, muestra un mensaje en
// consola indicando la categoría correspondiente según la edad
// ingresada.

const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const calcularEdad =()=>{
    rl.question(`escriba su edad para decirle en que etapa de su vida esta: `,(edad)=>{
        let edad2 = parseFloat(edad)

        if(edad2 >= 0 && edad2 <= 12){
            console.log(`Usted esta en la etapa de la niñes por que tiene: ${edad} años de edad.`)
        }else if(edad2 >= 13 && edad <= 17){
            console.log(`Usted esta en la etapa de la adolecencia por que tiene: ${edad} años de edad.`)
        }else if(edad2 >= 18 && edad2 <= 35){
            console.log(`Usted esta en la etapa de adulto joven por que tiene: ${edad} años de edad.`)
        }else if(edad2 >= 36 && edad <= 59){
            console.log(`Usted esta en la etapa de adulto por que tiene: ${edad} años de edad.`)
        }else if(edad2 >= 60 && edad2 <= 122){//Deje el limite de edad de 122 por que es lo maximo que una persona ah llegado ah vivir
            console.log(`Usted esta en la etapa de adulto mayor por que tiene: ${edad} años de edad.`)
        }else if(edad2 >= 123){
            console.log(`escriba una edad valida el limite de edad es de 122 por que es lo maximo que una persona ah llegado ah vivir .`)
        }else {
            console.log(`escriba una opcion valida.`)}
        rl.close()
    })
}

calcularEdad()
class Usuario {
    constructor(Username){
        this._Username=Username;
    }
//obtener el username
    get Username(){
        return this._Username
    }
//set para validar el username
    set Username(Username){
        if(Username.length>=3){
            this._Username = Username
        }else{
            console.log(`el nombre de usuario ' ${Username}' debe tener almenos 3 caracteres`)
        }

    }


}


const Usario1 = new Usuario(`luz`)
console.log(`Nombre de Usario Valido: ${Usario1.Username}`)
Usario1.Username = `se`

Usario1.Username = `yony`
console.log(`Nombre de Usario Valido: ${Usario1.Username}`)
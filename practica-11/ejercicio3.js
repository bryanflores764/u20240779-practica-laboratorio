class Clima {
  constructor(Celsius) {
    this._Celcius = Celsius;
  }

  //metodo get

  get Fahrenheit() {
    return (this._Celcius *9)/5+32;
  }

  //set para asignar la temperatura em Fahrenheit
  set Fahrenheit(Fahrenheit){
    this._Celcius = ((Fahrenheit -32)*5)/9
  }

  //get y set para la temperatura en celsius

  get Celsius(){
    return this._Celcius;
  }

  set Celsius(Celsius){
    this._Celcius = Celsius
  }
}


const clima = new Clima(25)
console.log(`Clima en grados Fahrenheit; ${clima.Fahrenheit}°F`)

clima.Fahrenheit= 77;
console.log(`Clima en grados celcius; ${clima.Celsius}°C`)




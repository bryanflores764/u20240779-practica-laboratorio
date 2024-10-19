class Libro {
    constructor(Titulo,Autor,Año){
        this._Titulo = Titulo;
        this._Autor = Autor;
        this._Año = Año;
    }

    MastarInfo(){
        console.log(`Titulo:${this._Titulo}, Autores: ${this._Autor}, Publicado en ${this._Año}`)

    }
}

let libro1 = new Libro(`Super asimetria`, `Sheldon Cooper y Amy Farrah Fowler` ,2020)

libro1.MastarInfo()
var Pelicula = require ('./pelicula');

class Colecciones{

 peliculas = [];

 constructor (){
    const movie = new Pelicula("P1", "Interestelar", "2H 49M", ["Drama", "Action", "Espacial"]);
    const movie1 = new Pelicula("P2", "El planeta de los simios", "2H 11M", ["Drama", "Accion", "Guerra", "Confrontacion"]);
    

    this.peliculas.push(movie, movie1);
    // return console.log(this.peliculas);
 }
}

module.exports = Colecciones;
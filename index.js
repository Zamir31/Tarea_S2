var colecciones = require('./colecciones');

const coleccion = new colecciones();

// console.log(coleccion.peliculas.generos_pelicula);
coleccion.peliculas.forEach(element => {
    console.log(element);
});
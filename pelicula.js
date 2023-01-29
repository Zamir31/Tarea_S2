class Pelicula {
    id_pelicula = "";
    nombre_pelicula = "";
    duracion_pelicula = "";
    generos_pelicula = [];

  constructor(id_pelicula,nombre_pelicula,duracion_pelicula,generos_pelicula) {
    this.id_pelicula = id_pelicula;
    this.nombre_pelicula = nombre_pelicula;
    this.duracion_pelicula = duracion_pelicula;
    this.generos_pelicula = generos_pelicula;
  }
}

module.exports = Pelicula;

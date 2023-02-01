var Pelicula = require ('./pelicula');
var Libro = require ('./libro');
var Persona = require ('./persona');

let peliculas = [];
let libros = [];
let personas = [];

const movie = new Pelicula("P1", "Interestelar", "2H 49M", ["Drama", "Action", "Espacial"]);
const movie1 = new Pelicula("P2", "El planeta de los simios", "2H 11M", ["Drama", "Accion", "Guerra", "Confrontacion"]);
peliculas.push(movie);
peliculas.push(movie1);
// return console.log(this.peliculas);

const libro = new Libro("L1", "Pinocho", 200, "Daniel Noriega");
const libro1 = new Libro("L2", "Cenicienta", 300, "Zamir Tejada");
libros.push(libro, libro1);

const persona = new Persona("PS1", "Alejandro", "Caceres", 24, 1.70);
const persona1 = new Persona("PS2", "Carlos", "Marin", 25, 1.80);
personas.push(persona, persona1);

const a = personas.find(p => p.id_persona === "PS1");
console.log(a);

const b = libros.find(l => l.id_libro === "L1");
console.log(b);

const c = peliculas.find(p => p.id_pelicula === "P1");
console.log(c);

// console.log(coleccion.peliculas.generos_pelicula);
peliculas.forEach(element => {
    console.log(element);
});

libros.forEach(element => {
    console.log(element);
});

personas.forEach(element => {
    console.log(element);
});


peliculas = peliculas.filter(element => element.id_pelicula === "P1");
console.log(peliculas);

libros = libros.filter(element => element.id_libro === "L1");
console.log(libros);

personas = personas.filter(element => element.id_persona === "PS1");
console.log(personas);

// coleccion.libros.filter(libro => console.log(libro));
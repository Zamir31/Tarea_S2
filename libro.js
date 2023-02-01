class Libro{
    id_libro = "";
    nombre_libro = "";
    numero_paginas = 0;
    autor = "";
    
    constructor(id_libro, nombre_libro, numero_paginas, autor){
        this.id_libro = id_libro;
        this.nombre_libro = nombre_libro;
        this.numero_paginas = numero_paginas;
        this.autor = autor;
    }
}

module.exports = Libro;
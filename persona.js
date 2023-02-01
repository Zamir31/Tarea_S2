class Persona {

    id_persona = "";
    nombre_persona = "";
    apellidos_persona = "";
    edad = 0;
    altura = 0;

    constructor(id_persona, nombre_persona,apellidos_persona,edad,altura){
        this.id_persona = id_persona;
        this.nombre_persona = nombre_persona;
        this.apellidos_persona = apellidos_persona;
        this.edad = edad;
        this.altura = altura;
    }
}

module.exports = Persona;
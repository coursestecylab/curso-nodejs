"use strict";
class Estudiante {
    constructor(nombre, edad, matricula) {
        this.nombre = nombre;
        this.edad = edad;
        this.matricula = matricula;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}
const alumno = new Estudiante("Carlos", 22, "ABC12345T");
alumno.saludar();

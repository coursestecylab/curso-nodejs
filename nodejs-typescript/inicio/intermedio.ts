interface Persona {
  nombre: string;
  edad: number;
  saludar(): void;
}

class Estudiante implements Persona {
  nombre: string;
  edad: number;
  matricula: string;

  constructor(nombre: string, edad: number, matricula: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.matricula = matricula;
  }

  saludar(): void {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const alumno = new Estudiante("Carlos", 22, "ABC12345T");
alumno.saludar();

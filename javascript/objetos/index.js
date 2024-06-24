let persona = {
  nombre: "Ana",
  edad: 28,
  saludar: function () {
    // métodos
    console.log(`Hola, soy ${this.nombre}`);
  },
};

//console.log(persona.saludar());
console.log(persona.nombre); // Ana
persona.nombre = "Maria";
console.log(persona.nombre); // Maria

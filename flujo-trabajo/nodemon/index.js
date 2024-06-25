// // Error de sintaxís
// console.log('Hola, Mundo!)

// // Error en tiempo de ejecución

// const fs = require("fs");
// fs.readFile("archivo.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// Errores lógicos
function sumar(a, b) {
  return a - b;
}

console.log(sumar(5, 3));

// // Sin funcion flecha
// function sum(a, b) {
//   return a + b;
// }

// // Con funcion flecha
// const sumar = (a, b) => a + b;
// console.log(sumar(2, 3)); // 5

// let cuadrado = (x) => x * x;
// console.log(cuadrado(4)); // 16

let obj = {
  nombre: "Juan",
  saludar: function () {
    setTimeout(() => {
      console.log(`Hola, ${this.nombre}`);
    }, 1000);
  },
};

console.log(obj.saludar());

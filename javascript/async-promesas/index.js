// function saludar(nombre) {
//   console.log(`Hola, ${nombre}`);
// }

// function procesarEntradaUsuario(callback) {
//   const nombre = "Ana";
//   callback(nombre);
// }

// console.log(procesarEntradaUsuario(saludar)); //

// async function obtenerDatos() {
//     let datos = await promesa;
//     console.log(datos)
// }

const promesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Datos obtenidos de la promesa!");
  }, 2000);
});

async function obtenerDatos() {
  let datos = await promesa;
  console.log(datos); // Datos obtenidos de la promesa!
}

console.log(obtenerDatos());

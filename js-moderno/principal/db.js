// Función que simula una operación asíncrona de base de datos y retorna una promesa
function obtenerDatosDesdeDB() {
  return new Promise((resolve, reject) => {
    // Simulamos un retardo de 2 segundos antes de resolver la promesa
    setTimeout(() => {
      const datos = ["dato1", "dato2", "dato3"];
      resolve(datos); // Resolvemos la promesa con los datos simulados
    }, 2000);
  });
}

// Exportamos la función para que pueda ser utilizada en otros módulos
module.exports = {
  obtenerDatosDesdeDB,
};

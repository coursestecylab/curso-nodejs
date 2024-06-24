function leerArchivo(ruta, callbackExito, callbackError) {
  setTimeout(() => {
    const error = Math.random() > 0.5; // simular un error aleatorio
    if (error) {
      callbackError("Error al leer el archivo");
    } else {
      callbackExito("Contenido del archivo");
    }
  }, 1000);
}

function manejarExito(contenido) {
  console.log("Archivo leído exitoxamente: ", contenido);
}

function manejarError(error) {
  console.log("Hubo un error: ", error);
}

console.log(leerArchivo("ruta-x", manejarExito, manejarError));

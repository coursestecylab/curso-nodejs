/// 1. Registro de eventos
//// Registramos una función de devolución de
//// llamada (callback) para un evento futuro

setTimeout(function () {
  console.log("Hola desde el callback de setTimeOut!");
}, 2000); // -> Esto ejecutará la función después de 2000 milisegundos (2 segundos)

/// 2. Inicio: El archivo principal se ejecuta cuando iniciamos NodeJS
console.log("Inicio del programa");

require("dotenv").config();

const express = require("express");
const app = express();

// Leer variables de entorno
const puerto = process.env.PORT || 3000;

// Configuración básica de express
app.get("/", (req, res) => {
  res.send("Hola, Mundo");
});

// Iniciar el servidor
const server = app.listen(puerto, () => {
  console.log(`Servidor ejecutandose en el puerto ${puerto}`);
});

// Función para cerrar el servidor y finalizar el proceso
const cerrarServidor = (signal) => {
  console.log(`Recibida la señal ${signal}. Cerrando servidor...`);
  server.close(() => {
    console.log("Servidor cerrado");
    process.exit(0);
  });

  setTimeout(() => {
    console.error("Forzando salida del proceso");
    process.exit(1);
  }, 10000);
};

// Manejo de señales del sistema
process.on("SIGTERM", () => cerrarServidor("SIGTERM"));

process.on("SIGINT", () => cerrarServidor("SIGINT"));

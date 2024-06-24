const fs = require("node:fs");

console.log("Inicio");

fs.readFile("archivo.txt", (err, data) => {
  if (err) throw err;
  console.log("Contenido del archivo: ", data.toString());
});

console.log("Fin");

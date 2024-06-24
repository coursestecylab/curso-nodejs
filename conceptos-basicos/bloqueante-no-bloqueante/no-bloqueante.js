const fs = require("fs");
fs.readFile("archivo.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
console.log("Lectura en proceso");

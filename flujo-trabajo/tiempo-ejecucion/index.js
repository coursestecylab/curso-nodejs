const fs = require("fs");

try {
  const data = fs.readFileSync("archivo.txt");
  console.log(data.toString());
} catch (error) {
  console.error("Error en tiempo de ejecicion", error.message);
}

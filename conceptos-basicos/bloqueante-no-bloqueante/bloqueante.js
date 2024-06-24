const fs = require("fs");
const data = fs.readFileSync("archivo.txt");
console.log(data.toString());

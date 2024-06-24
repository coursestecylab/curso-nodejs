const http = require("http");

const servidor = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hola, Mundo");
});

servidor.listen(3000, () => {
  console.log("Servidor ejecutandose en el puerto http://localhost:3000");
});

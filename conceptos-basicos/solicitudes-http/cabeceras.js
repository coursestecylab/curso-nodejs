const http = require("node:http");

const servidor = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("X-Custom-Header", "valor");
  res.statusCode = 200;
  res.end("<h1>Hola, Mundo</h1>");
});

servidor.listen(3000, () => {
  console.log("Servidor ejecutandose en http://localhost:3000/");
});

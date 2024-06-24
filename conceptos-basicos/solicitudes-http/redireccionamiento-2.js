const http = require("http");

const servidor = http.createServer((req, res) => {
  if (req.url === "/redirect-temporal") {
    res.statusCode = 302;
    res.setHeader("Location", "/nueva-temporal");
    res.end();
  } else if (req.url === "/nueva-temporal") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Página nueva temporal");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Página no encontrada");
  }
});

servidor.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000/");
});

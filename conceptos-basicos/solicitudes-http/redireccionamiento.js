const http = require("http");

const servidor = http.createServer((req, res) => {
  if (req.url === "/antigua") {
    res.statusCode = 301;
    res.setHeader("Location", "/nueva");
    res.end();
  } else if (req.url === "/nueva") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Página nueva");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Página no encontrada");
  }
});

servidor.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000/");
});

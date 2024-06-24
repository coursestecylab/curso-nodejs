const http = require("node:http");
const url = require("node:url");

const servidor = http.createServer((req, res) => {
  const ruta = url.parse(req.url, true);
  if (ruta.pathname === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Página de inicio");
  } else if (ruta.pathname === "/sobre" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Página sobre nosotros");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Página no encontrada");
  }
});

servidor.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000/");
});

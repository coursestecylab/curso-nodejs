const http = require("http");

const servidor = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/datos") {
    let cuerpo = "";
    req.on("data", (chunk) => {
      cuerpo += chunk.toString();
    });
    req.on("end", () => {
      console.log(cuerpo);
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Datos recibidos");
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Página no encontrada");
  }
});

servidor.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000/");
});

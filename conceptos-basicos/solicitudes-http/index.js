const http = require("node:http");
const url = require("node:url");

let datos = [{ id: 1, contenido: "dato inicial" }];

const servidor = http.createServer((req, res) => {
  const ruta = url.parse(req.url, true);

  if (req.method === "GET" && ruta.pathname === "/datos") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "applicatio/json");
    res.end(
      JSON.stringify({
        mensaje: "Datos recibidos",
      })
    );
  } else if (req.method === "POST" && ruta.pathname === "/datos") {
    let cuerpo = "";
    req.on("data", (chunk) => {
      cuerpo += chunk.toString();
    });
    req.on("end", () => {
      const nuevoDato = JSON.parse(cuerpo);
      nuevoDato.id = datos.length + 1;
      datos.push(nuevoDato);
      res.statusCode = 201;

      res.end(JSON.stringify(nuevoDato));
    });
  } else if (req.method === "PUT" && ruta.pathname === "/datos") {
    // ACTIVIDAD
  } else if (req.method === "PATCH" && ruta.pathname === "/datos") {
    // ACTIVIDAD
  } else if (req.method === "DELETE" && ruta.pathname === "/datos") {
    // ACTIVIDAD
  }
});

servidor.listen(3000, () => {
  console.log("Servidor ejecutandose en http://localhost:3000/");
});

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  req.token = 10 + "10";
  res.send("Hello TecyLab");
});

app.listen(3000);
console.log("Server is running on port 3000");

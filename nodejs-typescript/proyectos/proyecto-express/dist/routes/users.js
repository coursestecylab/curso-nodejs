"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let usuarios = [
    { id: 1, nombre: "Alice" },
    { id: 2, nombre: "Carlos" },
];
router.get("/users", (req, res) => {
    res.json(usuarios);
});
router.post("/users", (req, res) => {
    console.log(req.body);
    const nuevoUsuario = req.body;
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
});
exports.default = router;

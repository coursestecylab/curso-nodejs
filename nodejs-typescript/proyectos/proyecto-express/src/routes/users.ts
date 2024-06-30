import { Router, Request, Response } from "express";

const router = Router();

let usuarios: { id: number; nombre: string }[] = [
  { id: 1, nombre: "Alice" },
  { id: 2, nombre: "Carlos" },
];

router.get("/users", (req: Request, res: Response) => {
  res.json(usuarios);
});

router.post("/users", (req: Request, res: Response) => {
  console.log(req.body);
  const nuevoUsuario = req.body;
  usuarios.push(nuevoUsuario);

  res.status(201).json(nuevoUsuario);
});

export default router;

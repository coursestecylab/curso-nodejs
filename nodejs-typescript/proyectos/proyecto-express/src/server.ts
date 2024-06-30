import express, { Request, Response } from "express";
import usersRouter from "./routes/users";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", usersRouter);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
}

export default app;

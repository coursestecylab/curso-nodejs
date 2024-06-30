import request from "supertest";
import app from "../server";

describe("GET /api/users", () => {
  it("deberia devolver una lista de usuarios", async () => {
    const res = await request(app).get("/api/users");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("length");
  });
  it("deberia crear un nuevo usuario", async () => {
    const nuevoUsuario = { id: 3, nombre: "Charlie" };
    const res = await request(app).post("/api/users").send(nuevoUsuario);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });
});

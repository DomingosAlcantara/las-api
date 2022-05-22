const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");

const request = supertest(customExpress());

describe("Página Inicial", () => {
  test("URL Base", async () => {
    const resp = await request.get("/");
    expect(resp.statusCode).toBe(200);
    expect(resp.text).toBe("Bem Vindo ao LAS-API");
  });
});

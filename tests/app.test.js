const request = require("supertest");
const app = require("../src/app");

describe("Student Management API", () => {
  test("GET / should return API status", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("Student Management API is running");
  });

  test("POST /students should add a student", async () => {
    const student = { name: "John Doe", id: 1 };

    const res = await request(app)
      .post("/students")
      .send(student);

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("John Doe");
  });

  test("GET /students should return students", async () => {
    const res = await request(app).get("/students");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

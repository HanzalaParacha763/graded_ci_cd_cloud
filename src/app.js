const express = require("express");
const app = express();

app.use(express.json());

// In-memory student store (for simplicity)
let students = [];

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Student Management API is running" });
});

// Add student
app.post("/students", (req, res) => {
  const student = req.body;
  students.push(student);
  res.status(201).json(student);
});

// Get all students
app.get("/students", (req, res) => {
  res.json(students);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

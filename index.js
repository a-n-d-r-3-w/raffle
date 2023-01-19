const fs = require("fs");
const students = fs.readFileSync("students.csv", { encoding: "utf-8" });

console.log(students);

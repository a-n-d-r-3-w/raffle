const fs = require("fs");
const dataAsOneLongString = fs.readFileSync("students.csv", {
  encoding: "utf-8",
});

const lines = dataAsOneLongString.split("\r\n");
const linesWithoutHeader = lines.slice(1);

// Get list of homerooms.
const homerooms = new Set();
linesWithoutHeader.map((line) => {
  const studentData = line.split(",");
  const homeroom = studentData[2];
  homerooms.add(homeroom);
});
console.log(homerooms);

// Group students by homeroom.
const studentsGroupedByHomeroom = {};
homerooms.forEach((homeroom) => {
  studentsGroupedByHomeroom[homeroom] = [];
});
linesWithoutHeader.map((line) => {
  const studentData = line.split(",");
  const student = {
    lastName: studentData[0],
    firstName: studentData[1],
  };
  const homeroom = studentData[2];
  studentsGroupedByHomeroom[homeroom].push(student);
});

console.log(studentsGroupedByHomeroom);

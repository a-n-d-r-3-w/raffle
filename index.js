const fs = require("fs");
const dataAsOneLongString = fs.readFileSync("students.csv", {
  encoding: "utf-8",
});

const lines = dataAsOneLongString.split("\r\n");
const linesWithoutHeader = lines.slice(1);

const students = [];
linesWithoutHeader.map((line) => {
  const studentData = line.split(",");
  const student = {
    lastName: studentData[0],
    firstName: studentData[1],
    homeRoom: studentData[2],
  };
  students.push(student);
});
console.log(students);

const fs = require("fs");
const dataAsOneLongString = fs.readFileSync("students.csv", {
  encoding: "utf-8",
});

const lines = dataAsOneLongString.split("\r\n");
const linesWithoutHeader = lines.slice(1);

const studentsGroupedByHomeroom = {};
linesWithoutHeader.map((line) => {
  const studentData = line.split(",");
  const student = {
    lastName: studentData[0],
    firstName: studentData[1],
  };
  const homeroom = studentData[2];
  if (studentsGroupedByHomeroom[homeroom]) {
    studentsGroupedByHomeroom[homeroom].push(student);
  } else {
    studentsGroupedByHomeroom[homeroom] = [student];
  }
});
console.log(studentsGroupedByHomeroom);

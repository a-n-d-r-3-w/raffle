const fs = require("fs");
const dataAsOneLongString = fs.readFileSync("students.csv", {
  encoding: "utf-8",
});

const lines = dataAsOneLongString.split("\r\n");
const linesWithoutHeader = lines.slice(1);

linesWithoutHeader.map((line) => {
  const studentData = line.split(",");
  console.log(studentData);
});

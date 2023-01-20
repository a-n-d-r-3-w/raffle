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

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

// For each homeroom...
homerooms.forEach((homeroom) => {
  console.log(`======== ${homeroom} ========`);

  // Pick a winner.
  const randomIndex = getRandomInt(studentsGroupedByHomeroom[homeroom].length);
  const winner = studentsGroupedByHomeroom[homeroom][randomIndex];
  console.log(`Winner: ${winner.firstName} ${winner.lastName}`);

  // Remove winner.
  studentsGroupedByHomeroom[homeroom] = studentsGroupedByHomeroom[
    homeroom
  ].filter((student) => {
    const isWinner =
      student.firstName === winner.firstName &&
      student.lastName === winner.lastName;
    return !isWinner;
  });

  // Pick another winner.
  const randomIndex2 = getRandomInt(studentsGroupedByHomeroom[homeroom].length);
  const winner2 = studentsGroupedByHomeroom[homeroom][randomIndex2];
  console.log(`Winner 2: ${winner2.firstName} ${winner2.lastName}`);
});

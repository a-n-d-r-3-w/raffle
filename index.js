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
  /**
   * Pick the winner of the teacher experience.
   */
  const randomIndex = getRandomInt(studentsGroupedByHomeroom[homeroom].length);
  const winner = studentsGroupedByHomeroom[homeroom][randomIndex];
  console.log(
    `Winner of the teacher experience for ${homeroom}: ${winner.firstName} ${winner.lastName}`
  );

  // Remove winner from the pool.
  studentsGroupedByHomeroom[homeroom] = studentsGroupedByHomeroom[
    homeroom
  ].filter((student) => {
    const isWinner =
      student.firstName === winner.firstName &&
      student.lastName === winner.lastName;
    return !isWinner;
  });
});

/**
 * Pick winner of "Principal For A Day".
 */
let students = [];
homerooms.forEach((homeroom) => {
  students = students.concat(studentsGroupedByHomeroom[homeroom]);
});

// Sort students by last name, then first name.
students.sort((student1, student2) => {
  if (student1.lastName.toLowerCase() < student2.lastName.toLowerCase()) {
    return -1;
  } else if (
    student1.lastName.toLowerCase() > student2.lastName.toLowerCase()
  ) {
    return 1;
  } else {
    // Last names match.
    if (student1.firstName.toLowerCase() < student2.firstName.toLowerCase()) {
      return -1;
    } else {
      return 1;
    }
  }
});

const randomIndex = getRandomInt(students.length);
const winner = students[randomIndex];
console.log(
  `Winner of "Principal For A Day": ${winner.firstName} ${winner.lastName}`
);

// Remove winner from the pool.
students = students.filter((student) => {
  const isWinner =
    student.firstName === winner.firstName &&
    student.lastName === winner.lastName;
  return !isWinner;
});

/**
 * Pick four winners of T-shirt activity.
 */
console.log("Winners of the T-shirt activity:");
for (let i = 0; i < 4; i++) {
  const randomIndex = getRandomInt(students.length);
  const winner = students[randomIndex];
  console.log(winner.firstName + " " + winner.lastName);

  // Remove winner from the pool.
  students = students.filter((student) => {
    const isWinner =
      student.firstName === winner.firstName &&
      student.lastName === winner.lastName;
    return !isWinner;
  });
}

/*
  WRITE YOUR SOLUTION HERE
*/

/**
 * ------------
 * MY SOLUTION
 * ------------
 */

const classroom = {
  // hasTeachingAssistant: true,
  hasTeachingAssistant: false,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],

  getStudents() {
    let teacher, teachingAssistant, students;
    this.hasTeachingAssistant
      ? ([teacher, teachingAssistant, ...students] = this.classList)
      : ([teacher, ...students] = this.classList);
    return students;
  },
};

console.log(classroom.getStudents());

/**
 * --------------------
 * INSTRUCTOR SOLUTION
 * --------------------
 */

// function getStudents(classroom) {
//   // de structure the object first
//   var { hasTeachingAssistant, classList } = classroom;
//   // create variables
//   var teacher, hasTeachingAssistant, students;
//   hasTeachingAssistant
//     ? ([teacher, teachingAssistant, ...students] = classList)
//     : ([teacher, ...students] = classList);
//   return students;
// }

// console.log(
//   getStudents({
//     hasTeachingAssistant: true,
//     classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
//   })
// );

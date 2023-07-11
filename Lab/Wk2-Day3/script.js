// let num = 10;

// if (num % 2 == 0) {
//   console.log("num is even");
// } else {
//   console.log("num is odd");
// }

// let b = -5;

// if (b > 0) {
//   console.log("b is positive");
// } else {
//   console.log("b is negative");
// }

// let age = 18;

// if (age > 18) {
//   console.log("Greater than 18");
// } else {
//   console.log("Less than 18");
// }

// Exercise
// Write a for loop that counts down from 10 to 1.

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// Exercise
// Write a for loop for the given output: 1, 3, 5, 7, 9 2, 4, 6, 8, 10

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }
// for (let j = 1; j <= 10; j++) {
//   if (j % 2 == 0) {
//     console.log(j);
//   }
// }

// Exercise
// create a loop that outputs multiples of 3 starting at 6 ending at 60.

// for (let i = 6; i <= 60; i = i + 3) {
//   console.log(i);
// }

// Exercise
// Write a for loop for the given output:

// let lb = "#";
// for (let i = 1; i <= 7; i++) {
//   console.log(lb);
//   lb += "#";
// }

// for (let i = 1; i <= 20; i++) {
//   if (i == 1) {
//     console.log(`${i} is neither Prime or Composite`);
//   } else if (i % 2 != 0) {
//     console.log(`${i} is odd`);
//   } else if (i % 2 == 0) {
//     console.log(`${i} is even`);
//   }
// }
let myArray = [1, 2, 3, 4, 5];

// add to the front
// myArray.unshift(0);

// add to the last
// myArray.push(6);

//remove front
// myArray.shift();

// remove from end
// myArray.pop();

// console.log(myArray);

// An Arrow function
// myArray.forEach((num) => {
//   console.log(num);
// });

// The For Each function
// myArray.forEach(function (num, index) {
//   console.log(num, index);
// });

// for (let num of myArray) {
//   console.log(movie);
//   if (movie == 4) break;
// }
// console.log(myArray);

// let newArray = myArray.slice(1, 2);
// console.log(newArray);

// let newArray1 = [...myArray];
// console.log(newArray1);

// let moreNewArray = [-0, ...newArray1, 10];
// console.log(moreNewArray);

// Join Method
// const elements = ["Fire", "Air", "Water"];
// let newElements = elements.join("-");
// console.log(newElements);

//console.log(elements.includes("metal"));
// console.log(elements.indexOf("Fire"));
// console.log(elements.lastIndexOf("Fire"));

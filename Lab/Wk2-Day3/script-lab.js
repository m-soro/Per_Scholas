/**
 * WEEK 2 DAY 4 LAB
 * REPL @link https://replit.com/@msoro/Week-2-Day-4-Lab#index.js
 */
/**
 * ------------
 * EXCERCISE 1
 * ------------
 * Log messages based on grade
 */
let grade = 80;

if (grade < 55) {
  console.log("Bad Grade But You'll Get Em Next Time");
} else if (grade >= 60 && grade < 70) {
  console.log("ehh");
} else if (grade >= 70 && grade < 80) {
  console.log("Keep trying");
} else if (grade >= 80) {
  console.log("You did a good job");
}

/**
 * ------------
 * EXCERCISE 2
 * ------------
 * Write a for loop for the given output:
 * 10, 30, 50, 70, 90
 * 20, 40, 60, 80, 100
 *
 * LOOK FOR A PATTERN
 *
 * Normal 10, 20, 30, 40, 50 | 60, 70, 80, 90, 100
 * Target 10, 30, 50, 70, 90 | 20, 40, 60, 80, 100
 * -----------------------------------------------
 * DIFF    0, 10, 20, 30, 40 | 40, 30, 20, 10,  0
 */

// Solution 1
console.log("\nExcercise1 - Solution 1 \n");

let firstFiveCounter = 1;
let secondFiveCounter = 5;
let firstRow = "";
let secondRow = "";

for (let j = 1; j <= 10; j++) {
  if (j <= 5) {
    firstFiveCounter++;
    firstRow = firstRow + (firstFiveCounter - 2 + j) * 10 + ", ";
  } else if (j >= 6) {
    secondFiveCounter--;
    secondRow = secondRow + (j - secondFiveCounter) * 10 + ", ";
  }
}
console.log(`${firstRow}\n${secondRow}`);

// Solution 2
console.log("\nExcercise1 - Solution 2 - Using Arrays\n");

let odd = [];
let even = [];

for (let i = 1; i <= 10; i++) {
  if (i % 2 != 0) {
    odd.push(i * 10);
  } else {
    even.push(i * 10);
  }
}
let result = odd.concat(even);
console.log(result);

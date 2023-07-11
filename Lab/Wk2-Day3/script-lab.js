// Excercise 1
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

// // Excercise 2
// Write a for loop for the given output:
//  10, 30, 50, 70, 90
//  20, 40, 60, 80, 100

console.log("Solution 1 \n");

let firstFiveCounter = 1;
let secondFiveCounter = 5;

for (let j = 1; j <= 10; j++) {
  if (j <= 5) {
    firstFiveCounter++;
    console.log((firstFiveCounter - 2 + j) * 10);
  } else if (j >= 6) {
    secondFiveCounter--;
    console.log((j - secondFiveCounter) * 10);
  }
}

// Solution 2
console.log("Solution 2 \n");

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

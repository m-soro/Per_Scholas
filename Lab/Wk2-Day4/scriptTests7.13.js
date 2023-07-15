/**
 * Keep printing integers in multiples of 3
 * as long as integers are less than 35 using a while loop
 */

// let x = 3;
// while (x < 35) {
//   if (x % 3 == 0) {
//     console.log(x);
//   }
//   x++;
// }
/**
 * Keep printing integers in multiples of 5 as long as integers are less than 100
 */

// let j = 1;
// while (j < 100) {
//   if (j % 5 == 0) {
//     console.log(j);
//   }
//   j++;
// }

/**
 * Using a while loop print integers between 0 and 20.
 * All numbers divisible by 2 should be multiplied by 3 before they are output.
 * All other integers should not be output.
 */

// let k = 20;
// while (k >= 1) {
//   if (k % 2 == 0) {
//     console.log(`num ${k} * 3 = ${k * 3}`);
//   }
//   k--;
// }

// let addThree = (x, y, z) => {
//   return x + y + z;
// };
// console.log(addThree(1, 1, 1));

/**
 * GENERATE PRIME NUMBERS
 * Using a while loop, print out all prime numbers between 0 - 20
 * Prime Numbers have only two factors and divisible by one
 * Generate Prime Numbers using 6(n) + 1 / 6(n) - 1
 *
 * PRODUCES WRONG RESULT STARTING PRIME #55
 *
 */

// function generatePrime(primeCount) {
//   const primeNums = [1, 2, 3];
//   for (let x = 1; x <= primeCount; x++) {
//     primeNums.push(`${6 * x - 1}`);
//     primeNums.push(`${6 * x + 1}`);
//   }
//   return primeNums;
// }
// console.log(generatePrime(20));

/**
 * Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions.
 * For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working,
 * modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
 */

/**
 * SOLUTION 1 - USING FOR LOOP AND IF ELSE
 */

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`FizzBuzz`);
//   } else if (i % 3 === 0) {
//     console.log(`Fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`Buzz`);
//   } else {
//     console.log(i);
//   }
// }

/**
 * SOLUTION 2 - USING WHILE LOOP AND TERNARY OPERATOR
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
 */

// let f = 0;
// while (f <= 100) {
//   f % 3 === 0 && f % 5 === 0
//     ? console.log(`FizzBuzz`)
//     : f % 3 === 0
//     ? console.log(`Fizz`)
//     : f % 5 === 0
//     ? console.log(`Buzz`)
//     : console.log(f);
//   f++;
// }

/**
 * COMPARING TWO ARRAYS AND TERNARY OPERATOR
 */

// let bobsFollowers = ["x", "y", "z", "a"];
// let tinasFollowers = ["x", "y", "b"];
// let mutualFollowers = [];

// for (let b = 0; b < bobsFollowers.length; b++) {
//   for (let t = 0; t < tinasFollowers.length; t++) {
//     bobsFollowers[b] === tinasFollowers[t]
//       ? mutualFollowers.push(tinasFollowers[t])
//       : null;
//   }
// }

/**
 * COMPARING TWO ARRAYS AND &&
 */

// let bobsFollowers = ["x", "y", "z", "a"];
// let tinasFollowers = ["x", "y", "b"];
// let mutualFollowers = [];

// for (let b = 0; b < bobsFollowers.length; b++) {
//   for (let t = 0; t < tinasFollowers.length; t++) {
//     bobsFollowers[b] === tinasFollowers[t] &&
//       mutualFollowers.push(tinasFollowers[t]);
//   }
// }

// console.log(mutualFollowers);

/**
 * WHILE LOOPS AND RANDOM
 */
// const cards = ["diamond", "spade", "heart", "club"];

// let currentCard;

// while (currentCard !== "spade") {
//   currentCard = cards[Math.floor(Math.random() * 4)];
//   console.log(currentCard);
// }

/**
 * Do While Loops
 */

// let cupsOfSugarNeeded = 4;
// let cupsAdded = 0;

// do {
//   cupsAdded++;
//   cupsOfSugarNeeded--;
// } while (cupsAdded < cupsOfSugarNeeded);

/**
 * -----------------------------------
 * Challenge: Short-Circuiting a Loop
 * -----------------------------------
 * Complete the function holidays that accepts an array of strings and iterates through the array.
 * If the array contains the string "October", return "Happy Halloween".
 * Otherwise, return the string "Have a great day!".
 * Do not use a variable to store the result that you are returning.
 */

// function holidays(arr) {
//   return arr.includes("October") ? "Happy Halloween" : "Have a great day!";
// }

/**
 * OR CODESMITH'S SOLUTION
 */

// function holidays(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "October") {
//       return "Happy Halloween"; // return statement in this block
//     }
//   }
//   return "Have a great day!"; // return statement in this block
// }

// const months = ["April", "May", "June", "October"];
// const animals = ["Cats", "Dogs", "Pigs"];

// console.log(holidays(months)); // should return: "Happy Halloween"
// console.log(holidays(animals)); // should return: "Have a great day!"

/*
  WRITE YOUR SOLUTION HERE
*/

// const myString = "scrabble";
// let wordLength = word.length;

// const factorial = (wordLength) => {
//   let result = 1;
//   let updatedNum = wordLength - 1;

//   //prettier-ignore
//   console.log(`wordLength is ${wordLength} : updatedNum is ${updatedNum} : result is ${wordLength * updatedNum}`);

//   result += wordLength * updatedNum;

//   if (updatedNum >= 1) {
//     factorial(updatedNum);
//   }
// };
// // factorial(5);
// console.log(factorial(5));

/**
 * --------------------
 * INSTRUCTOR SOLUTION
 * --------------------
 * For Loop Iterative
 */

// function numPermutations(letter) {
//   let total;
//   for (let i = 1; i <= letter.length; i++) {
//     if (total === undefined) {
//       total = i;
//       continue;
//     }
//     total *= i;
//   }
//   return total;
// }

// console.log(numPermutations("hello"));

/**
 * --------------------
 * INSTRUCTOR SOLUTION
 * --------------------
 * Recursive
 */

function numPermutations(letters) {
  // the base case, stop when there is only 1 letter in the set of letters
  if (letters.length === 1) {
    return 1;
  }
  // if we have more than 1 letter, recursively call the function with one less letter
  // and multiply this with the amount of letter in the set
  return letters.length * numPermutations(letters.slice(1));
}

console.log(numPermutations("hello"));

/**
 * -----------------------
 * FACTORIAL PERMUTATIONS
 * -----------------------
 * Recursive
 */

// function factorial(x) {
//   if (x === 0) {
//     return 1;
//   }
//   return x * factorial(x - 1);
// }
// console.log(factorial("hello".length));

/**
 * ---------
 * FOR LOOP
 * ---------
 * Countdown using for loop
 */
// const countDown = (num) => {
//   for (let i = num; i >= 0; i--) {
//     console.log(i);
//   }
// };
// countDown(20);

/**
 * ----------
 * RECURSION
 * ----------
 * Countdown using recursion
 */
// const countDownRecursion = (num) => {
//   // log the number
//   console.log(num);

//   //minus num by 1
//   const updatedNum = num - 1;

//   // the base case
//   if (updatedNum >= 0) {
//     countDownRecursion(updatedNum);
//   }
// };

// countDownRecursion(5);

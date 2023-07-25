/**
 * ----------
 * RECURSION
 * ----------
 * @link https://www.youtube.com/watch?v=LteNqj4DFD8
 */

/**
 * ----------
 * FACTORIAL
 * ----------
 */
function factorial(n) {
  // the base case - the stopping condition
  console.log(n);
  if (n <= 1) {
    return 1;
  } else return n * factorial(n - 1);
}
// console.log(factorial(6));

/**
 * factorial(6) = 720
 * ----------------------
 * 6 * factorial(5) = 720
 *   5 * factorial(4) = 120
 *     4 * factorial(3) = 24
 *       3 * factorial(2) = 6
 *         2 * factorial(1) = 2
 */

/**
 * ----------
 * RECURSION
 * ----------
 * @link https://www.youtube.com/watch?v=M-5nzjxtXpQ
 */

/**
 * ------------
 * PRINT ARRAY
 * ------------
 */
function printNumbers(index, array) {
  if (index === array.length) return;

  console.log(array[index]);
  printNumbers(index + 1, array);
}
// printNumbers(0, [1, 2, 3, 4]);

/**
 * ---------
 * POWER OF
 * ---------
 */

// power(2, 5);
// 2 * power(2, 4);
// 2 * 2 * power(2, 3);
// 2 * 2 * 2 * power(2, 2);
// 2 * 2 * 2 * 2 * power(2, 1); // once you reach  0 or 1. Stop.

function power(number, exponent) {
  if (exponent === 1) return number;
  return number * power(number, exponent - 1);
}
// console.log(power(2, 5));

/**
 * -----------
 * FIBBONACCI
 * -----------
 */
function fibbonacci(n) {
  if (n === 2 || n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
// console.log(fibbonacci(4));

//============

a = [1, 3, 3];
b = [3, 2, 1];

function compareTriplets(a, b) {
  let al = 0;
  let bb = 0;
  let score = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      score[0] = al += 1;
    } else if (a[i] < b[i]) {
      score[1] = bb += 1;
    }
  }
  return score;
}

console.log(compareTriplets(a, b));

/**
 * Keep printing integers in multiples of 3
 * as long as integers are less than 35 using a while loop
 */

let i = 3;
while (i < 35) {
  if (i % 3 == 0) {
    console.log(i);
  }
  i++;
}
/**
 * Keep printing integers in multiples of 5 as long as integers are less than 100
 */

let i = 1;
while (i < 100) {
  if (i % 5 == 0) {
    console.log(i);
  }
  i++;
}

/**
 * Using a while loop print integers between 0 and 20.
 * All numbers divisible by 2 should be multiplied by 3 before they are output.
 * All other integers should not be output.
 */

let i = 20;
while (i >= 1) {
  if (i % 2 == 0) {
    console.log(`num ${i} * 3 = ${i * 3}`);
  }
  i--;
}

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

function generatePrime(primeCount) {
  const primeNums = [1, 2, 3];
  for (let x = 1; x <= primeCount; x++) {
    primeNums.push(`${6 * x - 1}`);
    primeNums.push(`${6 * x + 1}`);
  }
  return primeNums;
}
console.log(generatePrime(20));

/**
 * Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions.
 * For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working,
 * modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
 */

/**
 * SOLUTION 1 - USING FOR LOOP AND IF ELSE
 */

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`Fizz`);
  } else if (i % 5 === 0) {
    console.log(`Buzz`);
  } else {
    console.log(i);
  }
}

/**
 * SOLUTION 2 - USING WHILE LOOP AND TERNARY OPERATOR
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
 */

let i = 0;
while (i <= 100) {
  i % 3 === 0 && i % 5 === 0
    ? console.log(`FizzBuzz`)
    : i % 3 === 0
    ? console.log(`Fizz`)
    : i % 5 === 0
    ? console.log(`Buzz`)
    : console.log(i);
  i++;
}

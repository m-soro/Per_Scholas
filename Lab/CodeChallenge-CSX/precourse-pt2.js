/**
 * REPL @link https://replit.com/@msoro/Pre-Course-Pt-2-CSX-Challenges-Solutions#index.js
 */
/**
 * --------------------------------------
 * CHALLENGE: ARRAYS - EXAMINING ELEMENTS
 * --------------------------------------
 * Create a variable called fourthItem and assign it the value of
 * the fourth item in the horror array ('Ghostface').
 * Then console.log fourthItem to see the output.
 */
const horror = ["Freddy", "Jason", "Michael", "Ghostface", "Chucky"];

// ADD CODE HERE
let fourthItem = "Ghostface";

// Write a console.log statement below to check your work!
console.log(fourthItem);

/**
 * -----------------------------------
 * CHALLENGE: ARRAYS - ADDING ELEMENTS
 * -----------------------------------
 * Use a built-in JavaScript method to
 * add another show to the netflixShows array.
 * Then log your updated array to the console.
 */
const netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

// ADD CODE HERE
netflixShows.push("Downton Abbey");

// Write a console.log statement below to check your work!
console.log(netflixShows);

/**
 * -----------------------------------
 * CHALLENGE: FOR LOOPS - FUNDAMENTALS
 * -----------------------------------
 * Using a for loop, decrement countDown by one each time the loop runs until it equals 0,
 * making use of looping functionality instead of logging each number separately.
 */

let countDown = 10;
// ADD CODE HERE

for (let i = 10; i >= 1; i--) {
  countDown = countDown - 1;
}

// Uncomment the below line to check your work
console.log(countDown); // -> should print 0;

/**
 * -------------------------------
 * CHALLENGE: FOR LOOPS AND ARRAYS
 * -------------------------------
 * 1. Iterate through the synonyms array using a for loop,
 *    pushing a greeting string with the format "Have a [synonym] day!" into the greetings array.
 * 2. Use a second for loop to iterate through the greetings and console.log() each greetings.
 */
const synonyms = ["fantastic", "wonderful", "great"];
const greetings = [];

for (let i = 0; i < synonyms.length; i++) {
  greetings.push("Have a [synonym] day!");
}

for (let i = 0; i < greetings.length; i++) {
  let synonym = synonyms[i];
  console.log(greetings[i].replace("[synonym]", synonym));
}

/**
 * --------------------------------------
 * CHALLENGE: FOR LOOPS AND ARRAY INDICES
 * --------------------------------------
 * For this challenge, loop through the arrays and push
 * a string with the format "My name is [firstName] [lastName] and I am from [place]"
 * into the array holding the respective bios.
 */
const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];

const bios = [];

// ADD CODE HERE
for (let i = 0; i < firstNames.length; i++) {
  bios.push(
    `My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`
  );
}

/**
 * -------------------------------------------------
 * CHALLENGE: FOR LOOPS - CALCULATING ARRAY ELEMENTS
 * -------------------------------------------------
 * You are given an array of five numbers called increaseByTwo.
 * Use a for loop to iterate through the array and increase each number by two.
 */
const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE

for (let i = 0; i < increaseByTwo.length; i++) {
  console.log(increaseByTwo[i] + 2);
  increaseByTwo[i] = increaseByTwo[i] + 2;
}

// Uncomment the line below to check your work!
console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];

/**
 * --------------------------------------
 * CHALLENGE: WHILE LOOPS - FUNDAMENTALS
 * --------------------------------------
 * Use a while loop to increment count by 2 on
 * each repetition of the block of code. Run the code block of your while loop
 * until count is 8.
 */
let count = 2;
// ADD CODE HERE

while (count < 8) {
  count = count + 2;
}

// Uncomment these to check your work!
console.log(count);

/**
 * ------------------------------------------------
 * CHALLENGE: WHILE LOOPS - CONDITIONAL EXPRESSION
 * ------------------------------------------------
 * Initialize a variable addThis to 0 and a variable sum to 0.
 * Use a while loop to repeat a code block as long as addThis is less than 10.
 * In the code block, add the value of addThis to sum, then increment addThis by 1.
 * After the while loop runs, the value of sum should be the sum of the numbers 0 through 9.
 */
// ADD CODE HERE
let addThis = 0;
let sum = 0;

while (addThis < 10) {
  sum = addThis + sum;
  addThis++;
}

// Uncomment the line below to check your work!
console.log(sum);

/**
 * ----------------------------------------
 * CHALLENGE: CONTROL FLOW - IF STATEMENTS
 * ----------------------------------------
 * Use an if statement to check if num is greater than 100.
 * If num is greater than 100, reassign the value of final to null.
 * Otherwise, set final to be two times the value of num.
 */

const num = 40;
let final;
// ADD CODE HERE

if (num > 100) {
  final = null;
} else {
  final = num * num;
}

// Log final to the console below to check your work
console.log(final);

/**
 * --------------------
 * CHALLENGE: FIZZBUZZ
 * --------------------
 * Use a loop to iterate through the numbers 1 through 16.
 * Push each number into fb, but push the string "fizz" in place of numbers divisible by 3,
 * "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.
 * Log fb to the console to see the output.
 * Hint: Check out the remainder/modulo operator: %.
 */

const fb = [];
// ADD CODE HERE

for (let i = 1; i <= 16; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    fb.push(`fizzbuzz`);
  } else if (i % 3 == 0) {
    fb.push(`fizz`);
  } else if (i % 5 == 0) {
    fb.push(`buzz`);
  } else {
    fb.push(i);
  }
}

console.log(fb);

/**
 * ---------------------------------------------------------------
 * OR FIZZBUZZ SOLUTION 2 - USING WHILE LOOP AND TERNARY OPERATOR
 * ---------------------------------------------------------------
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
 * --------------------------------------
 * CHALLENGE: CONTROL FLOW AND ITERATION
 * --------------------------------------
 * Iterate through the array and multiply a number by 10 if it is greater than or equal to 5.
 */
const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// ADD CODE HERE

for (let i = 0; i < timesTenIfOverFive.length; i++) {
  if (timesTenIfOverFive[i] >= 5) {
    timesTenIfOverFive[i] = timesTenIfOverFive[i] * 10;
  }
}

// Uncomment the line below to check your work!
console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]

/**
 * ------------------------------------------
 * CHALLENGE: OBJECTS - EXAMINING PROPERTIES
 * ------------------------------------------
 * You are provided with an object called checkObj.
 * Using a for... in loop, determine if the object contains the property foundNum.
 * If it exists, reassign the value of found to 1.
 */
const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18,
};

let found = 0;

for (let key in checkObj) {
  if (checkObj[key] == checkObj.foundNum) {
    found = 1;
  }
}
/**
 * ----------------------------------------------
 * CHALLENGE: OBJECTS - ITERATING WITH FOR... IN
 * ----------------------------------------------
 * You are provided with an empty array called objToArray.
 * Using a for... in loop, fill the array with all of the numbers from the
 * checkObj object if they are greater than or equal to 2.
 */
const checkObject = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18,
};

const objToArray = [];
// ADD CODE HERE

for (let x in checkObject) {
  if (checkObj[x] >= 2) {
    objToArray.push(checkObject[x]);
  }
}

/**
 * -----------------------------------------------
 * CHALLENGE: OBJECTS - ITERATING WITH A FOR LOOP
 * -----------------------------------------------
 * This time, use the Object.values() method to return an array of checkObj's values,
 * and assign this array to a constant called objToArray. Next, use a for loop to iterate
 * through objToArray and determine if any of the numbers are divisible by 6.
 * If so, reassign the value of divBy6 to true.
 */
const checkObject1 = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18,
};

let divBy6 = false;
// ADD CODE HERE
const objToArray1 = Object.values(checkObject1);

objToArray.forEach((x) => (x % 6 === 0 ? (divBy6 = true) : divBy6));

console.log(objToArray1);

/**
 * -----------------------------------
 * CHALLENGE: OBJECTS - NESTED ARRAYS
 * -----------------------------------
 * You are provided with an empty array called nestedArr.
 * Using a for loop starting at index 0, add 5 subarrays to nestedArr,
 * with each nested array containing the string 'loop' concatenated with
 * the corresponding index in nestedArr as its first element, and the index
 * as its second element.
 */
const nestedArr = [];
// ADD CODE HERE

for (let i = 0; i < 5; i++) {
  let myArr = [`loop${i}`, i];
  nestedArr.push(myArr);
}

console.log(nestedArr);

/**
 * ---------------------------------------
 * CHALLENGE: OBJECTS - ADDING PROPERTIES
 * ---------------------------------------
 * You are provided with an array, possibleIterable.
 * Using a for loop, build out the object divByThree so that each key is an element
 * of possibleIterable that is divisible by three. The value of each key should
 * be the array index at which that key can be found in possibleIterable.
 */
const possibleIterable = [4, 3, 9, 6, 23];
let divByThree = {};
// ADD CODE HERE

// divByThree.hello = this.hello

possibleIterable.forEach(function (num, index) {
  if (num % 3 == 0) {
    divByThree[`${num}`] = index;
  }
});
console.log(divByThree);

/**
 * -------------------------------------
 * CHALLENGE: OBJECTS - EVALUATING KEYS
 * -------------------------------------
 * You are given an object called sumMe containing several key/value pairs and a variable
 * called total whose initial value is 0. Using a for... in loop, iterate through the keys of sumMe;
 * if the value corresponding to a key is a number, add it to total.
 */
const sumMe = {
  hello: "there",
  you: 8,
  are: 7,
  almost: "10",
  done: "!",
};
let total = 0;
// ADD CODE HERE
for (let x in sumMe) {
  if (typeof sumMe[x] === "number") {
    total = total + sumMe[x];
  }
}
console.log(total);

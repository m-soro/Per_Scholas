/** 
Mark Soro
@link https://replit.com/@msoro/JavaScript-Functions-Lab-Wk4-Day1-Lab#index.js

JavaScript Functions Lab - Wk4-Day1-Lab
*/

/**
 * Write a function called minusOnethat takes a parameter num.
 * Assuming the argument is a number, print the argument -1
 */
const minusOne = (n) => n - 1;
console.log("\n======== MINUSONE ========\n");
console.log(minusOne(100));
console.log(minusOne(50));
console.log(minusOne(Infinity));

/**
 * Write a function makeSentencethat takes three parameters and
 * concatenates them into a fully formed sentence.
 */
const makeSentence = (s1, s2, s3) => `${s1} ${s2} ${s3}`;
console.log("\n======== MAKESENTENCE ========\n");
console.log(makeSentence("Hello", "Hi", "World!"));
console.log(makeSentence("Monica", "and", "Chandler"));
console.log(makeSentence("Rachel", "and", "Ross"));

/**
 * Write a function called getLastElementthat takes a parameter arr.
 * Invoke the function with an array as the argument.
 * The function should print the last element within the array.
 */
const getLastElement1 = (arr) => arr.pop();
// OR
const getLastElement2 = (arr) => arr[arr.length - 1];
console.log("\n======== GETLASTELEMENT ========\n");
console.log(getLastElement1([1, 2, 3, 4, 5, 6]));
console.log(getLastElement1(["a", "b", "c"]));
console.log(
  getLastElement1([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
console.log("");
console.log(getLastElement2([1, 2, 3, 4, 5, 6]));
console.log(getLastElement2(["a", "b", "c"]));
console.log(
  getLastElement2([
    [1, 2, 3],
    [4, 5, 6],
  ])
);

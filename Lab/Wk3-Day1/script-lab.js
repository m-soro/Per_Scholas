/**
 * REPL @link https://replit.com/@msoro/W3-Day1-Lab#index.js
 */
/*
Challenge: addList

=======Difficulty: Basic

Prompt:

- Write a function called addList that accepts any quantity of numbers as arguments,
  adds them together and returns the resulting sum.
- Assume all parameters will be numbers. <=========
- If called with no arguments, return 0 (zero).



*/

// Your solution for 01-addList here:

function addList(...numArr) {
  let sum = 0;
  if (numArr) {
    numArr.forEach((num) => {
      sum = sum + num;
    });
    return sum;
  } else return 0;
}

//Examples:

console.log(addList(1)); //=> 1
console.log(addList(1, 50, 1.23)); //=> 52.23
console.log(addList(7, -12)); //=> -5

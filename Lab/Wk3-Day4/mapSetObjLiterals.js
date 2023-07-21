// function higherOrder(callBack) {
//   return callBack(2);
// }

// function timesTwo(n) {
//   return n * 2;
// }

// console.log(higherOrder(timesTwo));

let letters = ["a", "b", "c", "d", "e"];
let pick = letters[Math.floor(Math.random() * letters.length)];

const letterValues = (pick) => {
  return pick === "a"
    ? "Alpha"
    : pick === "b"
    ? "Beta"
    : pick === "c"
    ? "Charlie"
    : pick === "d"
    ? "Delta"
    : "Echo";
};

// console.log(letterValues(pick));

const caps = letters.map((letter) => letter.toUpperCase());
// console.log(caps);

const addLetters = letters.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(addLetters);

/**
 * ----
 * SET
 * ----
 */
let mySet = new Set(["a", "a", "b", "c", "d", "e", "f"]);
// console.log(mySet.has("a"));

// using for loop to iterate a set
for (let item of mySet) {
  console.log(item);
}

/**
 * ----
 * MAP
 * ----
 * its like an object but it Maps are indexed
 */

let mark = new Map();
mark.set("name", "Mark Soro");
mark.set("job", "Software engineer");

console.log(mark);
console.log(mark.has("name"));
console.log(mark.get("job"));

// use a for loop to iterate a map
// this print an array, has key and values
// or an entries list
for (let item of mark) {
  console.log(item);
}

// OR
console.log(mark.entries());

/**
 * -------------------
 * FROM OBJECT TO MAP
 * -------------------
 */
const stooge = {
  name: "Mo",
  job: "Comedian",
};

console.log(stooge);
// this will give us an array of array
console.log(Object.entries(stooge));

//lets turn the object to a map
const stooge1 = new Map(Object.entries(stooge));
// this is now a map
console.log(stooge1);

// Functions Three Ways
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

const add1 = function (a, b) {
  return a + b;
};

console.log(add1(1, 2));

const add2 = (a, b) => a + b;
console.log(add2(1, 2));

let friend = "rachel";
!(friend === "rachel" && console.log("Green")) || console.log("waitress");

//boolean
let bool = true;
// kind of like a ternary operator
// if condition is superman will print, else batman will print
// but this one can only have the truthy value
console.log(bool === true && "Superman");

const checkObj = {
  oddNum: 1,
  evenNUm: 2,
  foundNum: 5,
  randomNum: 18,
};

let divBy6 = false;

const objToArray = Object.values(checkObj);
console.log(objToArray);
console.log(" ");

objToArray.forEach((x) => (x % 6 === 0 ? (divBy6 = true) : divBy6));

// const fightClub = (name) => {
//   return name === "Teo"
//     ? "1st rule: You do not talk about Fight Club."
//     : name === "Manara"
//     ? "2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB."
//     : name === "Liv"
//     ? '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
//     : name === "Devin"
//     ? "4th rule: Only two guys to a fight."
//     : "No shirts";
// };
// console.log(fightClub("Teo"));
// console.log(fightClub("Liv"));
// console.log(fightClub("Mark"));

// The Nullish coalescing(??) operator is a logical operator that returns its right hand side operand
// when its left-hand side operand is null or undefined and otherwise returns its left-hand side operand
function fightClub(name) {
  const theClub = {
    Teo: "1st rule: You do not talk about Fight Club.",
    Manara: "2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.",
    Liv: '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.',
    Devin: "4th rule: Only two guys to a fight.",
  };
  return theClub[name] ?? "No shirts";
}
console.log(fightClub("Teo"));
console.log(fightClub("Liv"));
console.log(fightClub("Mark"));

function getPassword(password) {
  const passwords = {
    password1234: "Facebook Password",
    "1234Password": "Instagram Password",
    "!pass1234": "Twitter Password",
    helloworld1234: "Github Password",
  };

  return passwords[password.toLowerCase()] ?? "password not found";
}

console.log(getPassword("password1234"));

function stringToBool(string) {
  const checkString = {
    true: true,
    false: false,
  };

  return checkString[string] ?? "String is not a boolean value";
}

console.log(stringToBool("f"));

// Use optional chaining
// In this code, we select the required function by key and then call it with two arguments.
// Since we are using optional chaining, the function will only be called if it exists.
// Otherwise, the default value will be returned.

function calculate(num1, num2, action) {
  const actions = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };

  return actions[action]?.(num1, num2) ?? "Calculation is not recognised";
}

console.log(calculate(1, 1, "add"));

const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

// optional chaining accesses an objects property or calls a function.
// if the object accessed or function called using this operator is undefined or null,
// the expression evaluates to undefined instead of throwing an error
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined

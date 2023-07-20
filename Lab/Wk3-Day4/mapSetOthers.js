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
// console.log(addLetters);

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

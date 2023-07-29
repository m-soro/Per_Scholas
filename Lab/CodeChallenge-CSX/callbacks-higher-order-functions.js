/**
 * ----------
 * PLURALIZE
 * ----------
 * @link https://csx.codesmith.io/units/callbacks/challenge-pluralize
 */
// ADD CODE HERE

const pluralize = (array) => {
  const plurals = [];
  for (let element of array) {
    plurals.push(element + "s");
  }
  return plurals;
};
// Uncomment these to check your work!
// const animals = ["dog", "cat", "tree frog"];
// console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]

/**
 * ---------------
 * CHALLENGE: MAP
 * ---------------
 * @link https://csx.codesmith.io/units/callbacks/challenge-map
 */

const subtractTwo = (n) => n - 2;
const map = (array, instruction) => {
  let newArray = [];
  for (let element of array) {
    newArray.push(instruction(element));
  }
  return newArray;
};

// Uncomment these to check your work!
// console.log(typeof subtractTwo); // should log: 'function'
// console.log(typeof map); // should log: 'function'
// console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]

/**
 * -------------------
 * CHALLENGE: FOREACH
 * -------------------
 * @link https://csx.codesmith.io/units/callbacks/challenge-for-each
 */
const forEach = (array, callback) => {
  for (let element of array) {
    callback(element);
  }
};

const map2 = (array, instruction) => {
  let newArray = [];
  forEach(array, function (element) {
    newArray.push(instruction(element));
  });
  return newArray;
};

// Uncomment these to check your work!
// console.log(typeof forEach); // should log: 'function'
// forEach(["a", "b", "c"], (i) => console.log(i)); // should log: 'a', 'b', 'c'
// console.log(typeof map); // should log: 'function'
// console.log(map([3, 4, 5], (n) => n - 2)); // should log: [1, 2, 3]

function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
}
const arrOfNums = [1, 2, 3, 4, 5];
function func1(num) {
  // ADD CODE HERE
  if (num % 2 === 0) return num;
}
function func2(num) {
  // ADD CODE HERE
  if (num % 2 !== 0) return num;
}

// Uncomment these to check your work!
console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]

/**
 * CHALLENGES COMPLETED
 * -------------------
 * ADDITIONAL READING
 * -------------------
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 * @link https://eloquentjavascript.net/05_higher_order.html
 * @link https://www.youtube.com/watch?v=rRgD1yVwIvE
 */

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

/**
 * -----------------------
 * CHALLENGE: FILTERARRAY
 * -----------------------
 * @link https://csx.codesmith.io/units/callbacks/challenge-filter-array
 */
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
// console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
// console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]

/**
 * ------------------------
 * CHALLENGE: EITHERFILTER
 * ------------------------
 * @link https://csx.codesmith.io/units/callbacks/challenge-either-filter
 */
function eitherFilter(array, callback1, callback2) {
  // ADD CODE HERE
  let newArray = [];
  array.forEach((element) => {
    if (callback1(element) || callback2(element)) newArray.push(element);
  });
  return newArray;
}

// Uncomment these to check your work!
// const arrOfNum = [10, 35, 105, 9];
// const integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
// const over100 = (n) => n > 100;
// console.log(eitherFilter(arrOfNum, integerSquareRoot, over100)); // should log: [105, 9]

/**
 * --------------------------
 * CHALLENGE: EITHERCALLBACK
 * --------------------------
 * @link https://csx.codesmith.io/units/callbacks/challenge-either-callback
 * did not get correctly
 */

function eitherCallback(callback1, callback2) {
  // ADD CODE HERE
  return (element, i, array) => {
    return callback1(element, i, array) || callback2(element, i, array);
  };
}

// Uncomment these to check your work!
function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) newArray.push(array[i]);
  }
  return newArray;
}
const arrOfN = [10, 35, 105, 9];
const integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
const over100 = (n) => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
// console.log(filterArray(arrOfN, intSqRtOrOver100)); // should log: [105, 9]

/**
 * ------------------
 * CHALLENGE: REDUCE
 * ------------------
 * @link https://csx.codesmith.io/units/callbacks/challenge-reduce
 */
const reduce = (array, callback, value) => {
  let totals = 0;
  array.forEach((element) => {
    totals += callback(element, value);
  });
  return totals;
};

// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
// console.log(reduce(nums, add, 0)); // should log 8

/**
 * ------------------------
 * CHALLENGE: INTERSECTION
 * ------------------------
 * @link https://csx.codesmith.io/units/callbacks/challenge-intersection
 * It works, but so different from csx solution
 */
// ADD CODE HERE
function intersection([a1, a2, a3]) {
  let newSet = new Set([...a1, ...a2, ...a3]); // combine 3 arrays in one array, then convert to Set
  let intersectionArray = [];
  newSet.forEach((num) => {
    // iterate the set, check if each num is in 3 arrays
    if (a1.includes(num) && a2.includes(num) && a3.includes(num))
      intersectionArray.push(num); // // if so, push to the array
  });
  return intersectionArray;
}

// Uncomment these to check your work!
// const arr1 = [5, 5, 5, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

/**
 * ------
 * UNION
 * ------
 * @link https://csx.codesmith.io/units/callbacks/challenge-union
 */

// function union(arrays) {
//   let newArray = [];
//   arrays.forEach((arr) => {
//     arr.forEach((a) => {
//       if (!newArray.includes(a)) newArray.push(a);
//     });
//   });
//   return newArray;
// }

/**
 * ------
 * UNION
 * ------
 * CSX's solution using reduce method
 */

function union(arrays) {
  return arrays.reduce((outputArray, currentArray) => {
    currentArray.forEach((element) => {
      if (!outputArray.includes(element)) outputArray.push(element);
    });
    return outputArray;
  });
}

// Uncomment these to check your work!
// const arr1 = [5, 10, 15];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [100, 15, 10, 1, 5];
// console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

/**
 * -------------
 * OBJOFMATCHES
 * -------------
 * @link https://csx.codesmith.io/units/callbacks/challenge-obj-of-matches
 * When creating an object dynamically use bracket notation instead of . dot notation
 */

function objOfMatches(a1, a2, callback) {
  let matchObject = {};
  for (let i = 0; i < a1.length; i++) {
    if (callback(a1[i]) === a2[i]) {
      matchObject[a1[i]] = a2[i];
    }
  }
  return matchObject;
}

/**
 * ---------------------------------
 * A FOREACH LOOP WILL WORK AS WELL
 * ---------------------------------
 *
 */

// arr1.forEach((value, index) => {
//   console.log(value, index, arr2[index]);
// });

// Uncomment these to check your work!
// const arr1 = ["hi", "howdy", "bye", "later", "hello"];
// const arr2 = ["HI", "Howdy", "BYE", "later", "HELLO"];
// function uppercaser(str) {
//   return str.toUpperCase();
// }
// console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }

/**
 * ---------
 * ARRTOOBJ
 * ---------
 * @link https://csx.codesmith.io/units/callbacks/challenge-array-to-obj
 * For some reason its failing to execute in VS Code. Works in CSX website though
 */

// function arrToObj(array, callback) {
//   let newObject = {};
//   array.forEach((element) => {
//     newObject[element] = callback(element);
//   });
//   return newObject;
// }

// Uncomment these to check your work!
// const arrOfStrings = ["beer", "glue"];
// console.log(arrToObj(arrOfStrings));
// const capitalize = (str) => str.toUpperCase();
// console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }

/**
 * -----------
 * JOINANDMAP
 * -----------
 * @link https://csx.codesmith.io/units/callbacks/challenge-join-and-map
 */
function joinAndMap(a1, a2, cb) {
  let newArr = [];
  a1.concat(a2).forEach((a) => newArr.push(cb(a)));
  return newArr;
}

// Uncomment these to check your work!
// const arrRed = ["strawberry", "cherry", "wine"];
// const arrBlue = ["blueberry", "sky", "ocean"];
// const cap = (str) => str.toUpperCase();
// console.log(joinAndMap(arrRed, arrBlue, cap)); // should log: ['STRAWBERRY', 'CHERRY', 'WINE', 'BLUEBERRY', 'SKY', 'OCEAN']

/**
 * --------------------
 * CHALLENGE: MULTIMAP
 * --------------------
 * @link https://csx.codesmith.io/units/callbacks/challenge-multi-map
 */

function multiMap(items, cb) {
  let myObj = {};
  for (let i = 0; i < items.length; i++) {
    myObj[items[i]] = cb.map((c) => c(items[i]));
  }
  return myObj;
}

// Uncomment these to check your work!
function uppercaser(str) {
  return str.toUpperCase();
}
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
function repeater(str) {
  return str + str;
}
const items = ["catfood", "glue", "beer"];
const functions = [uppercaser, capitalize, repeater];
// console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

/**
 * --------------------
 * CHALLENGE: MAJORITY
 * --------------------
 * @link https://csx.codesmith.io/units/callbacks/challenge-majority
 */

function majority(array, cb) {
  let trues = array.filter((a) => cb(a));
  return trues.length > array.length / 2 ? true : false;
}

// Uncomment these to check your work!
const isOdd = function (num) {
  return num % 2 === 1;
};
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// function prioritize(array, callback) {
//   let newArray = [];
//   array.forEach((element) => {
//     //prettier-ignore
//     callback(element) ? newArray.unshift(element) : newArray.push(element);
//   });
//   return newArray;
// }

/**
 * ----------------------
 * CHALLENGE: PRIORITIZE
 * ----------------------
 * @link https://csx.codesmith.io/units/callbacks/challenge-prioritize
 */

function prioritize(array, callback) {
  let trueArray = [];
  let falseArray = [];
  array.forEach((element) => {
    callback(element) ? trueArray.push(element) : falseArray.push(element);
  });
  let result = trueArray.sort().concat(falseArray);
  return result;
}

// Uncomment these to check your work!
function startsWithS(str) {
  return str[0].toLowerCase() === "s";
}
const tvShows = ["curb", "rickandmorty", "seinfeld", "sunny", "friends"];
// console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

/**
 * -------------------
 * CHALLENGE: COUNTBY
 * -------------------
 * @link https://csx.codesmith.io/units/callbacks/challenge-count-by
 */

function countBy(array, callback) {
  let myObj = {};
  let odd = [];
  let even = [];
  array.forEach((a) => {
    callback(a) === "odd" ? odd.push("odd") : even.push("even");
  });
  myObj.odd = odd.length;
  myObj.even = even.length;
  return myObj;
}

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return "even";
  else return "odd";
}
const numz = [1, 2, 3, 4, 5];
// console.log(countBy(numz, evenOdd)); // should log: { odd: 3, even: 2 }

/**
 * -------------------
 * CHALLENGE: GROUPBY
 * -------------------
 * @link https://csx.codesmith.io/units/callbacks/challenge-group-by
 */

function groupBy(array, callback) {
  let myObj = {};
  array.forEach((element) => {
    //prettier-ignore
    myObj[callback(element)] = array.filter((a) => callback(a) === callback(element) && a);
  });
  return myObj;
}

// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

/**
 * --------------------
 * CHALLENGE: GOODKEYS
 * --------------------
 * @link https://csx.codesmith.io/units/callbacks/challenge-good-keys
 */

function goodKeys(obj, callback) {
  let newArr = [];
  for (let value in obj) {
    if (callback(obj[value]) === true) newArr.push(value);
  }
  return newArr;
}

// Uncomment these to check your work!
const sunny = {
  mac: "priest",
  dennis: "calculator",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
function startsWithBird(str) {
  return str.slice(0, 4).toLowerCase() === "bird";
}

console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

/**
 * Introduction to Iterators
 */

/**
 * The .forEach() Method
 */

const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over fruits below
// fruits.forEach((fruit) => {
//   console.log(`I want to eat a ${fruit}`);
// });

/**
 * The .map() Method
 */

const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

// Create the secretMessage array below+

const secretMessage = animals.map((animal) => {
  return animal[0];
});

// console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const lilNumbers = bigNumbers.map((number) => {
  return number / 100;
});

// console.log(lilNumbers);
/**
 * The .filter() Method
 */

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter((number) => {
  return number < 250;
});

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter((word) => {
  return word.length > 7;
});

// console.log(longFavoriteWords);

/**
 * The .findIndex() Method
 */

const animals2 = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals2.findIndex((animal) => {
  return animal === "elephant";
});

const startsWithS = animals2.findIndex((animal) => {
  return animal[0] === "s";
});

/**
 * The .reduce() Method
 */

// const numbers = [1, 2, 4, 10];

// const summedNums = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// }, 100)  // <- Second argument for .reduce()

// console.log(summedNums); // Output: 117

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);
// console.log(newSum);

/**
 * Using .some() and .every() - both returns boolean
 */

const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// Something is missing in the method call below

// console.log(
//   words.some((word) => {
//     return word.length < 6;
//   })
// );

// Use filter to create a new array
const interestingWords = words.filter((word) => {
  return word.length > 5;
});
// console.log(interestingWords);

// Make sure to uncomment the code below and fix the incorrect code before running it

// console.log(interestingWords.every((word) => word.length > 5));

/**
 * USE A VARIETY OF ARRAY METHODS
 */

const cities = [
  "Orlando",
  "Dubai",
  "Edinburgh",
  "Chennai",
  "Accra",
  "Denver",
  "Eskisehir",
  "Medellin",
  "Yokohama",
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach((city) => console.log("Have you visited " + city + "?"));

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0];
}, "C");

// console.log(word);

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);

// Choose a method that will return a boolean value
nums.some((num) => num < 0);

/**
.forEach() is used to execute the same code on every element 
    in an array but does not change the array and returns undefined.

.map() executes the same code on every element in an array 
    and returns a new array with the updated elements.

.filter() checks every element in an array to see if it meets certain 
    criteria and returns a new array with the elements that return truthy for the criteria.

.findIndex() returns the index of the first element of an array that satisfies
    a condition in the callback function. It returns -1 if none of the 
    elements in the array satisfies the condition.

.reduce() iterates through an array and takes the values of 
    the elements and returns a single value.

All iterator methods take a callback function, 
   which can be a pre-defined function, a function expression, or an arrow function.

You can visit the Mozilla Developer Network to learn more about 
    iterator methods (and all other parts of JavaScript!).
 */

/**
 * CHALLENGES FROM CODESMITH
 * */

function addN(arr, n) {
  // ADD CODE HERE
  const newArr = [];
  arr.forEach((a) => {
    newArr.push(a + n);
  });
  return newArr;
}

// Uncomment these to check your work!
// console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
// console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]

function getTheSum(arr) {
  // ADD CODE HERE
  let sum = 0;
  arr.forEach((a) => {
    sum = a + sum;
  });
  return sum;
}

// Uncomment these to check your work!
// console.log(getTheSum([3, 6, 9])); // expected log 18
// console.log(getTheSum([10, 11, 12])); // expected log 33

function multiplyAll() {
  let product = 1;
  for (let i = 0; i < arguments.length; i++) {
    product = product * arguments[i];
  }
  return product;
}

function multiplyAll() {
  let numArray = Object.values(arguments);
  return numArray.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
}

// console.log(multiplyAll(5, 5, 5, 3)); // should log: 375

function mergingElements(array1, array2) {
  // ADD CODE HERE
  let newArray = [];
  for (let x = 0; x < array1.length; x++) {
    newArray.push(array1[x] + array2[x]);
  }
  return newArray;
}

// Uncomment these to check your work!
// console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
// console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]

/**
 * Write a function mergingTripletsAndQuints which takes in two arrays as arguments.
 * This function will return a new array replacing the elements in array1 if they are divisible by 3 or 5.
 * The number should be replaced with the sum of itself added to the element at the corresponding index in array2.
 */

// [1, 2, 3, 4, 5, 15]
// [1, 3, 6, 7, 8, 9]

// [1, 2, 9, 4, 13, 24]

function mergingTripletsAndQuints(array1, array2) {
  // ADD CODE HERE
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    array1[i] % 3 === 0 || array1[i] % 5 === 0
      ? newArray.push(array1[i] + array2[i])
      : newArray.push(array1[i]);
  }
  return newArray;
}

// // Uncomment these to check your work!
// console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
// console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]

function imAboutToExplodeWithExcitement(n) {
  let counter = 0;
  while (counter <= n) {
    if (
      (n === 5 && console.log("Oh wow, I can't handle the anticipation!")) ||
      (n === 3 && console.log("I'm about to explode with excitement!")) ||
      (n === 1 && console.log("That was kind of a let down"))
    ) {
    } else if (n === 3 || n === 5 || n === 1) {
      //do nothing
    } else {
      console.log(n);
    }
    n--;
  }
}

/**
 * OR
 */

function imAboutToExplodeWithExcitement(n) {
  let counter = 0;
  while (counter <= n) {
    n === 5 && console.log("Oh wow, I can't handle the anticipation!");
    n === 3 && console.log("I'm about to explode with excitement!");
    n === 1 && console.log("That was kind of a let down");
    n === 3 || n === 5 || n === 1 ? false : console.log(n);
    n--;
  }
}

// Uncomment the line below to check your work!
// imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4,
// I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'

// imAboutToExplodeWithExcitement(10);

function closestToTheMark(player1, player2) {
  const theMark = Math.floor(Math.random() * 100);
  console.log(`If theMark is ${theMark}...`);
  // ADD CODE HERE
  let x = theMark;
  if (player1 === x) {
    return `Player1 guessed it right!`;
  } else if (player2 === x) {
    return `Player2 guessed it right!`;
  } else if (player2 !== x && player1 !== x) {
    if (Math.abs(player1 - x) < Math.abs(player2 - x)) {
      return `Player 1 is closer to ${x} by ${Math.abs(player1 - x)}`;
    } else {
      return `Player 2 is closer to ${x} by ${Math.abs(player2 - x)}`;
    }
  } else {
    return `Try again`;
  }
}

// // Uncomment the line below to check your work!
// console.log(closestToTheMark(25, 75));

function getTheRange(arr) {
  // ADD CODE HERE
  const resultArr = [];
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = max - min;
  resultArr.push(min);
  resultArr.push(max);
  resultArr.push(range);
  return resultArr;
}

// // Uncomment these to check your work!
// console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]

/**
 * ---------------------------------------
 * CHALLENGE: LOOPS - MULTIPLE CONDITIONS
 * ---------------------------------------
 * Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in
 * array2 to each element under 10 in array1. Similarly, addingAllTheWeirdStuff
 * should also add the sum of all the even numbers in array2 to those elements over 10 in array1.
 * BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.
 */

function addingAllTheWeirdStuff(array1, array2) {
  // ADD CODE HERE

  let evens = array2.filter((num) => num % 2 === 0);
  let odds = array2.filter((num) => num % 2 !== 0);
  let sumOfEvens = evens.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  let sumOfOdds = odds.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  let addOne = array2.some((a) => a > 20);

  const resultArr = array1.map((a) => {
    if (addOne) {
      a++;
    }
    if (a > 10) {
      return (a += sumOfEvens + sumOfOdds);
    } else {
      return (a += sumOfOdds);
    }
  });
  return resultArr;
}

// CODESMITHS EXPECTED RESULT ARE SO WRONG!
// Uncomment these to check your work!
// console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 22]
// console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]

/**
 * ------------------
 * CHALLENGE: ADDTWO
 * ------------------
 * Create a function addTwo that accepts a number,
 * and returns the number plus 2.
 */
// ADD CODE HERE
function addTwo(num) {
  return num + 2;
}

// Uncomment these to check your work!
// console.log(typeof addTwo); // should log: 'function'
// console.log(addTwo(10)); // should log: 12

/**
 * ----------------
 * CHALLENGE: ADD S
 * ----------------
 * Create a function addS that accepts a string,
 * and returns the string with an "s" added to the end.
 */
// ADD CODE HERE
function addS(string) {
  return string + "s";
}

// Uncomment these to check your work!
// console.log(typeof addS); // should log: 'function'
// console.log(addS("cat")); // should log: 'cats'

/**
 * --------------------
 * CHALLENGE: sayHello
 * --------------------
 * Create a function sayHello that accepts a string argument and
 * returns the string 'Hi, ' with the passed-in string added to the end.
 */
// ADD CODE HERE

function sayHello(name) {
  return `Hi, ${name}`;
}
// Uncomment these to check your work!
// console.log(sayHello("Mary")); // should log: 'Hi, Mary'
// console.log(sayHello("Haley")); // should log: 'Hi, Haley'

/**
 * -----------------------
 * CHALLENGE: WEREAWESOME
 * -----------------------
 * Write a function wereAwesome that takes you and your
 * pair programming partner's name and returns the string "[your buddy's name]
 * and [you] are awesome!"
 */
function wereAwesome(you, yourBuddy) {
  return `${yourBuddy} and ${you} are awesome!`;
}

// Uncomment the lines below to test your function:
// console.log(wereAwesome("Dave", "Will")); // => "Will and Dave are awesome!"
// console.log(wereAwesome("Victoria", "Jenny")); // => "Jenny and Victoria are awesome!"
// console.log(wereAwesome("Chris", "Jac")); // => "Jac and Chris are awesome!"
// console.log(wereAwesome("Phillip", "Skyler")); // => "Skyler and Phillip are awesome!"

/**
 * ----------------------
 * CHALLENGE: LASTLETTER
 * ----------------------
 * Create a function lastLetter that takes a word (string) and
 * returns the last character/letter of that string.
 * Hint- Remember that each character/letter in a string has an index
 * position that you can access with brackets- '[]'
 */
function lastLetter(word) {
  return word[word.length - 1];
}

// Uncomment the lines below to test your code
// console.log(lastLetter("hello")); //=> "o"
// console.log(lastLetter("goodbye!")); //=> "!"
// console.log(lastLetter("ZeltoiD")); //=> "D"
// console.log(lastLetter("I love Javascript")); //=> "t"

/**
 * -----------------------------
 * CHALLENGE: PASSING ARGUMENTS
 * -----------------------------
 * Examine the code given to you.
 * Determine what arguments must be passed into isX1 and isX2 respectively to
 * obtain an output of true for both, and pass in the arguments accordingly.
 */
const x = 3;

function isX1(num) {
  const x = 5;
  return num === x;
}

function isX2(num) {
  return num === x;
}

const one = isX1(5 /* ADD CODE HERE */);
const two = isX2(/* ADD CODE HERE */);

// Uncomment these to check your work!
// console.log(one); // should log: true
// console.log(two); // should log: true

/**
 * ------------------------------
 * CHALLENGE: INVOKING FUNCTIONS
 * ------------------------------
 * Examine the code given to you.
 * Try to make the calls variable equal to 'JerryKramerGeorgeElaine'
 * with only a single invocation to the function jerry.
 */
let calls = "";

function jerry(str) {
  return "Jerry" + kramer("Kramer") + george("George") + elaine("Elaine");
}

function george(str) {
  return str;
}

function elaine(str) {
  return str;
}

function kramer(str) {
  return str;
}

// Uncomment these to check your work!
calls = jerry(calls);
// console.log(calls); // should log: 'JerryKramerGeorgeElaine'

/**
 * ---------------------
 * CHALLENGE: MAKEPLANS
 * ---------------------
 * Create a function makePlans that accepts a string. This string should be a name.
 * The function makePlans should call the function callFriend and return the result.
 * callFriend accepts a boolean value and a string. Pass in the friendsAvailable variable and name to callFriend.
 * Create a function callFriend that accepts a boolean value and a string.
 * If the boolean value is true, callFriend should return the string 'Plans made with NAME this weekend'.
 * Otherwise it should return 'Everyone is busy this weekend'.
 */
let friendsAvailable = true;

function makePlans(name) {
  // INSERT CODE HERE
  callFriend(bool, name);
}

function callFriend(bool, name) {
  // INSERT CODE HERE
  if (bool) {
    return `Plans made with ${name} this weekend`;
  } else {
    return "Everyone is busy this weekend";
  }
}

// Uncomment these to check your work!
// console.log(makePlans("Mary")); // should return: "Plans made with Mary this weekend'
// friendsAvailable = false;
// console.log(makePlans("James")); //should return: "Everyone is busy this weekend."

/**
 * ---------------------------------------------
 * CHALLENGE: FUNCTIONS - DISPLAY VS. EXECUTION
 * ---------------------------------------------
 * Create a console log that displays the contents of the function rather than executing it.
 * For example, your result should be function add20 (num){ return num + 20 }.
 */
function add20(num) {
  return num + 20;
}

// CREATE YOUR CONSOLE.LOG BELOW
// console.log(add20);

/**
 * -----------------
 * CHALLENGE: ISODD
 * -----------------
 * Create a function isOdd that accepts a number argument.
 * isOdd will return true if the number is odd and false if the number is even.
 */
// ADD CODE HERE
const isOdd = (num) => (num % 2 === 0 ? false : true);

// Uncomment these to check your work!
// console.log(isOdd(5)); // should log: true
// console.log(isOdd(2008)); // should log: false

/**
 * -----------------------------------------------------
 * CHALLENGE: CONTROL FLOW - IF STATEMENTS & REMAINDERS
 * -----------------------------------------------------
 * Write a function iLoveEvenNumbers that takes a number argument and returns 'Oh Yeah Evens!'
 * if the argument is even or 'I am too normal for odd numbers' if the argument is odd.
 */
// ADD CODE HERE

const iLoveEvenNumbers = (num) =>
  num % 2 == 0 ? "Oh Yeah Evens!" : "I am too normal for odd numbers";

// Uncomment these to check your work!
// console.log(iLoveEvenNumbers(42)); // expected log 'Oh Yeah Evens!'
// console.log(iLoveEvenNumbers(17)); // expected log 'I am too normal for odd numbers'

/**
 * ------------------------
 * CHALLENGE: GETREMAINDER
 * ------------------------
 * Create a function getRemainder that takes two numbers and returns
 * the remainder (value left over from division) of dividing the larger number by the smaller one.
 * Hint- You have no guarantee which number will be the bigger number, how can you determine which is which?
 */
function getRemainder(num1, num2) {
  // INSERT CODE HERE
  return Math.max(num1, num2) % Math.min(num1, num2);
}

// Uncomment the lines below to test your code
// console.log(getRemainder(17, 5)); // => 2
// console.log(getRemainder(20, 5)); // => 0
// console.log(getRemainder(8, 22)); // => 6
// console.log(getRemainder(7, 42)); // => 0

/**
 * --------------------------------------------------------------
 * CHALLENGE: CONTROL FLOW - IF STATEMENTS & MULTIPLE CONDITIONS
 * --------------------------------------------------------------
 * Using an IF/ELSE statement, write a function greetings which returns 'Good Morning!'
 * if the hour is before 12, 'Good Afternoon!' if the hour is before 15, or 'Good Night!' if the hour is 15 or after.
 */
function greetings(hour) {
  // ADD CODE HERE
  if (hour < 12) {
    return "Good Morning!";
  } else if (hour < 15) {
    return "Good Afternoon!";
  } else if (hour >= 15) {
    return "Good Night!";
  }
}

// Uncomment these to check your work!
// console.log(greetings(8)); // expected log 'Good Morning!'
// console.log(greetings(12)); // expected log 'Good Afternoon!'
// console.log(greetings(14)); // expected log 'Good Afternoon!'
// console.log(greetings(15)); // expected log 'Good Night!'
// console.log(greetings(18)); // expected log 'Good Night!'

/**
 * ---------------------------
 * CHALLENGE: GRADECALCULATOR
 * ---------------------------
 * Create a function gradeCalculator which takes a grade (number) and returns its letter grade.
 * grades 90 and above should return "A"
 * grades 80 to 89 should return "B"
 * grades 70 to 79 should return "C"
 * grades 60 to 69 should return "D"
 * 59 and below should return "F"
 */
function gradeCalculator(grade) {
  // ADD CODE HERE
  if (grade > 90) {
    return "A";
  } else if (grade >= 80 && grade <= 89) {
    return "B";
  } else if (grade >= 70 && grade <= 79) {
    return "C";
  } else if (grade >= 60 && grade <= 69) {
    return "D";
  } else {
    return "F";
  }
}

// Uncomment the lines below to test your code
// console.log(gradeCalculator(92)); // => "A"
// console.log(gradeCalculator(84)); // => "B"
// console.log(gradeCalculator(70)); // => "C"
// console.log(gradeCalculator(61)); // => "D"
// console.log(gradeCalculator(43)); // => "F"

/**
 * ------------------
 * CHALLENGE: DROIDS
 * ------------------
 * Complete the function droids that accepts an array of strings
 * and iterates through the array using a FOR loop. Update the variable result to "Found Droids!"
 * if the array contains the string "Droids". Otherwise update the variable result to
 * "These are not the droids you're looking for." Return your updated result.
 */
function droids(arr) {
  let result = "";
  // ADD CODE HERE
  arr.forEach((ele) => {
    ele == "Droids"
      ? (result = "Found Droids")
      : (result = "These are not the droids you're looking for.");
  });
  return result;
}

// Uncomment these to check your work!
const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"];
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"];
// console.log(droids(starWars)); // should log: "Found Droids!"
// console.log(droids(thrones)); // should log: "These are not the droids you're looking for."

/**
 * -------------------------
 * CHALLENGE: USING FOREACH
 * -------------------------
 * Recreate the function droids from the previous challenge,
 * but instead of using a FOR loop, use the built-in forEach method.
 */
function droids(arr) {
  let result = "";
  // ADD CODE HERE
  arr.forEach((ele) => {
    ele == "Droids"
      ? (result = "Found Droids!")
      : (result = "These are not the droids you're looking for.");
  });
  return result;
}

// Uncomment these to check your work!
// const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"];
// const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"];
// console.log(droids(starWars)); // should log: "Found Droids!"
// console.log(droids(thrones)); //should log: "These are not the droids you're looking for."

/**
 * -----------------------------------
 * CHALLENGE: SHORT-CIRCUITING A LOOP
 * -----------------------------------
 * Complete the function holidays that accepts an array of strings and iterates through the array.
 * If the array contains the string "October", return "Happy Halloween".
 * Otherwise, return the string "Have a great day!". Do not use a variable to store the result that you are returning.
 */

function holidays(arr) {
  return arr.includes("October") ? "Happy Halloween" : "Have a great day!";
}

/**
 * OR CODESMITH'S SOLUTION
 */

function holidays(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "October") {
      return "Happy Halloween"; // return statement in this block
    }
  }
  return "Have a great day!"; // return statement in this block
}

const months = ["April", "May", "June", "October"];
const animals = ["Cats", "Dogs", "Pigs"];

/**
 * -----------------------------------------------
 * CHALLENGE: FOR LOOPS - UPDATING ARRAY ELEMENTS
 * -----------------------------------------------
 * Using a FOR loop, write a function addN which adds the argument n
 * to each number in the array arr and returns the updated arr.
 */
function addN(arr, n) {
  // ADD CODE HERE
  const newArr = [];
  arr.forEach((a) => {
    newArr.push(a + n);
  });
  return newArr;
}

// Uncomment these to check your work!
console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]

/**
 * ----------------------------------------------
 * CHALLENGE: FOR LOOPS - SUMMING ARRAY ELEMENTS
 * ----------------------------------------------
 * Using a FOR loop, write a function getTheSum which
 * adds each element in arr to find the array total.
 */
function getTheSum(arr) {
  // ADD CODE HERE
  let sum = 0;
  arr.forEach((a) => {
    return (sum = sum + a);
  });
}

// Uncomment these to check your work!
console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33

/**
 * -----------------------
 * CHALLENGE: MULTIPLYALL
 * -----------------------
 * Create a function multiplyAll that takes an unknown number of
 * integer arguments, multiplies them all together, and returns the result.
 */

// ADD CODE HERE
function multiplyAll() {
  let product = 1;
  for (let i = 0; i < arguments.length; i++) {
    product = product * arguments[i];
  }
  return product;
}

/* OR */

function multiplyAll() {
  let numArray = Object.values(arguments);
  return numArray.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
}

// Uncomment these to check your work!
// console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
// console.log(multiplyAll(5, 5, 5, 3)) // should log: 375

/**
 * --------------------------------------
 * CHALLENGE: LOOPS - SUMMING TWO ARRAYS
 * --------------------------------------
 * Write a function mergingElements which adds each element in array1
 * to the corresponding element of array2 and returns the new array.
 */
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
 * --------------------------------
 * CHALLENGE: LOOPS & CONTROL FLOW
 * --------------------------------
 * Write a function mergingTripletsAndQuints which takes in two arrays as arguments.
 * This function will return a new array replacing the elements in array1 if they are divisible by 3 or 5.
 * The number should be replaced with the sum of itself added to the element at the corresponding index in array2.
 */

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
// Uncomment these to check your work!
// console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
// console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]

/**
 * ----------------------------------
 * CHALLENGE: WHILE LOOPS - COUNTERS
 * ----------------------------------
 * Using a WHILE loop, write a function imAboutToExplodeWithExcitement
 * which prints a countdown from n. When the countdown gets to 5,
 * print 'Oh wow, I can't handle the anticipation!' When it's at 3,
 * print 'I'm about to explode with excitement!' When the counter is finished,
 * print 'That was kind of a let down'.
 */
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
// imAboutToExplodeWithExcitement(10);

/**
* ------------------------------------------------------------
* CHALLENGE: CONTROL FLOW - IF STATEMENTS AND THE MATH OBJECT
* ------------------------------------------------------------
* Using an IF/ELSE statement, write a function closestToTheMark that 
* takes two player inputs as number arguments. The function will return 
* 'Player 1 is closest' or 'Player 2 is closest' depending on which player input 
* is closest to the randomly generated number.

* Note: Due to the output being based off of a random factor, the tests provided below cannot 
* determine if you have solved the prompt exactly. 
* The test cases for this challenge check for the correct data types only.
*/
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

// Uncomment the line below to check your work!
// console.log(closestToTheMark(25, 75));

/**
 * -------------------------
 * CHALLENGE: LOOPS - RANGE
 * -------------------------
 * Using a loop, write a function getTheRange which finds the range
 * (difference between high and low) of arr.
 * The value returned should be an array with the low, high, and range.
 */
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

// Uncomment these to check your work!
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

// ----------------------------------------
// CODESMITHS EXPECTED RESULT ARE SO WRONG!
// ----------------------------------------
// Uncomment these to check your work!
// console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 22]
// console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]

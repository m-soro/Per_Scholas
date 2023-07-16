/**
 * REPL LINK
 * @link https://replit.com/@msoro/Wk3-Day1-HW
 */
/**
 * --------------------
 * (1) (GIVEN EXAMPLE)
 * --------------------
 * (completed above) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments
 *  and returns the largest of them. If they are the same, return that number.
 *  Use the if-else construct or a ternary expression - the Math.max method is not allowed.
 */

console.log(`\n--1--\n`);
console.log("Already solved by example");

/**
 * ----
 * (2)
 * ----
 * Define a function, as a function expression, maxOfThree that takes three numbers as arguments
 * and returns the largest of them. Again, the Math.max method is not allowed.
 */

const maxOfThree = function (n1, n2, n3) {
  return n3 > (n1 > n2 ? n1 : n2) ? n3 : n1 > n2 ? n1 : n2;
  // IS n3 > than the result of this expression-> (IS n1 > n2 THEN n1 : IF NOT n2) THEN n3 : otherwise this expression-> n1 > n2 ? n1 : n2
};
console.log(`\n--2--\n`);
console.log(maxOfThree(12, 2, 3));
console.log(maxOfThree(5, 10, 3));
console.log(maxOfThree(5, 18, 15));

/**
 * ----
 * (3)
 * ----
 * Define a function, as a function declaration, isCharAVowel that
 * takes a character as an argument and returns true if it is a vowel, false otherwise.
 */

function isCharAVowel(char) {
  char = char.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.includes(char);
}
console.log(`\n--3--\n`);
console.log(isCharAVowel("S"));
console.log(isCharAVowel("e"));
console.log(isCharAVowel("X"));
console.log(isCharAVowel("y"));

/**
 * ----
 * (4)
 * ----
 * Define a function, as a function expression, sumArray that takes an array of numbers
 *  and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
 */

const sumArray = function (array) {
  let i = 0;
  let sum = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
};
console.log(`\n--4--\n`);
console.log(sumArray([2, 4, 5]));
console.log(sumArray([2, 10, 15]));
console.log(sumArray([5, 5, 6]));

/**
 * ----
 * (5)
 * ----
 *  Define a function, as a function declaration, multiplyArray that takes an array of numbers
 *  and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
 */

const multiplyArray = function (array) {
  return array.reduce((acc, curr) => acc * curr);
};
console.log(`\n--5--\n`);
console.log(multiplyArray([2, 4, 5]));
console.log(multiplyArray([10, 2, 5]));
console.log(multiplyArray([3, 3, 3]));

/**
 * ----
 * (6)
 * ----
 * Define a function, as a function expression, numArgs that returns
 * the number of arguments passed to the function when called.
 */

const numArgs = function () {
  return arguments.length;
};
console.log(`\n--6--\n`);
console.log(numArgs(1, 2, 3));
console.log(numArgs(1, 2));
console.log(numArgs(1, 2, 3, 4, 5));

/**
 * --
 * 7
 * --
 * Define a function, as a function declaration, reverseString that takes a string,
 * reverses the characters, and returns it.
 * For example, reverseString('rockstar');would return the string "ratskcor".
 */

function reverseString(str) {
  let reverse = "";
  let strArr = str.split("");
  let i = strArr.length - 1; // less than 1 because index starts at 0
  while (i >= 0) {
    reverse += strArr[i];
    i--;
  }
  return reverse;
}
console.log(`\n--7--\n`);
console.log(reverseString("Hi I'm Mark Soro"));
console.log(reverseString("Software Engineering student at"));
console.log(reverseString("PerScholas"));

/**
 * ----
 * (8)
 * ----
 * Define a function, as a function expression, longestStringInArray that takes an array
 * of strings as an argument and returns the length of the longest string.
 */

const longestStringInArray = function (array) {
  const lengthArr = array.map((a) => a.length);
  return Math.max(...lengthArr);
};
console.log(`\n--8--\n`);
console.log(longestStringInArray(["Apple", "Banana", "Kiwi"]));
console.log(longestStringInArray(["Hearts", "Spade", "King"]));
console.log(longestStringInArray(["Javascript", "Python", "Java"]));

/**
 * ----
 * (9)
 * ----
 * Define a function, as a function declaration, stringsLongerThan that takes an
 * array of strings and a number as arguments; and returns an array of the strings
 * that are longer than the number passed in. For example,
 * stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
 */

function stringsLongerThan(array, num) {
  return array.filter((a) => a.length > num && a);
}
console.log(`\n--9--\n`);
console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));
console.log(stringsLongerThan(["The", "moment", "I", "wake", "up"], 3));
console.log(stringsLongerThan(["Before", "I", "put", "on", "my"], 2));

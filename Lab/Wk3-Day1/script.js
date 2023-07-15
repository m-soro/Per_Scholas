/**
 * FUNCTION DECLARATION AKA FUNCTION DEFINITIONS
 */
// function sayHello(name) {
//   console.log(`hello ${name}!`);
// }

// const sayHello = function (name) {
//   console.log(`hello ${name}!`);
// };

// sayHello(); // Will return "Hello undefined !"
// sayHello("Mark");

/**
 * JAVASCRIPT WILL RETURN UNDEFINED IF NO ARGUMENT IS PASSED
 */

/**
 * FUNCTION DECLARATIONS VS FUNCTION EXPRESSIONS
 * ---------------------------------------------
 * FUNCTION DECALARAIONS ARE HOISTED-CAN BE INVOKED BEFORE INTERPRETED
 * FUNCTION EXPRESSIONS MUST BE DECLARED FIRST BEFORE BEING USED
 */

// fnDeclaration(); // thank you function declarations :)
// fnExpression(); // TypeError: fnExpression is not a function

// function fnDeclaration() {
//   console.log("I'm coming from a function declaration");
// }
/**
 * THIS WILL THROW ERROR - FUNCTION EXPRESSIONS MUST BE DECLARED FIRST
 * BEFORE BEING CALLED. THEY PLAY BY VARIABLE RULES
 */
// const fnExpression = function () {
//   console.log("I'm coming from a function expression");
// };

/**
 * FUNCTION DECLARATION - HOISTED
 */
// hoistedFunc();

// function hoistedFunc() {
//   console.log("Im Hoised! Whoo Hoo!");
// }

const func1 = function () {
  //
  // A function expression
  //
};

const func2 = () => {
  //
  // An arrow function
  //
};

// const add = (a, b) => a + b;
// console.log(add(1, 2));

function areBothEven(n1, n2) {
  return !(n1 % 2) && !(n2 % 2); // ! is used to convert the two equations to a Boolean
} // (n1 % 2) -> This evaluates to 0 - Bang! converts to true - Negates it basically

// console.log(areBothEven(2, 3));
// console.log(areBothEven(1, 3));

/**
 * Printing a box
 */

let printBox = (boxChar, boxSize) => {
  let boxStrip;
  for (let i = 0; i < boxSize; i++) {
    boxStrip = buildBoxStrip(boxChar, boxSize);
    console.log(boxStrip);
  }
};

let buildBoxStrip = (boxChar, length) => {
  let boxStrip = "";
  for (let i = 0; i < length; i++) {
    boxStrip = boxStrip + boxChar;
  }
  return boxStrip;
};

// console.log(buildBoxStrip("*", 10));
// console.log(printBox("# ", 10));
// console.log(printBox("[] ", 10));
// console.log(printBox("* ", 10));

/**
Practice Writing Functions
You're going to write two functions, one as a function declaration & the other as a function expression.
----------------------------------------
EXERCISE 1: Write a Function Declaration
Write a function named computeArea using the function declaration approach.
It will have two parameters: width& height.
It will compute the area of a rectangle (width X height) and return a string in the following form:
The area of a rectangle with a width of _ and a height of _ is ___ square units.
Invoke the function to test it.
*/

function computeArea(width, height) {
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${
    width * height
  } square units.`;
}

// console.log("ComputeArea Function");
// console.log(computeArea(3, 2));
// console.log(computeArea(5, 2));

/**
EXERCISE 2: Write a Function Expression
Write a function named planetHasWater using the function expression syntax.
It will have one parameter: planet.
Return trueif the planetargument is either "Earth" or "Mars", otherwise return false.
Bonus points if you ensure the function will work regardless of the casing of the planetbeing passed in ('earth', 'MARS', etc.).
Invoke the function a couple of times to test it!
 */

/* Arrow Function and Ternary Operator */
const planetHasWaterArrow = (planet) => {
  planet = planet.charAt(0).toUpperCase() + planet.slice(1).toLowerCase();
  planet === "Mars" || planet === "Earth";
  // ? console.log(`true`)
  // : console.log(`false`);
};

/* Function Expression and Ternary Operator */
const planetHasWaterExpression = function (planet) {
  planet = planet.charAt(0).toUpperCase() + planet.slice(1).toLowerCase();
  return planet === "Mars" || planet === "Earth" ? true : false;
};

// console.log("\nArrow Function");
// planetHasWaterArrow("Earth");
// planetHasWaterArrow("MaRS");
// planetHasWaterArrow("Moon");

// console.log("\nFunction Expression");
// console.log(planetHasWaterExpression("Earth"));
// console.log(planetHasWaterExpression("MaRS"));
// console.log(planetHasWaterExpression("Moon"));

/**
 * The rest Parameter
 * Create an object using ...
 */

// function getDevObject(name) {
//   console.log(arguments);
// }

// function getDevObject(name, html, ...skills) {
//   console.log(name);
//   console.log(html);
//   console.log(skills);
// }

// const getDevObject = function (name, ...skills) {
//   return {
//     devName: name,
//     jobSkills: skills,
//   };
// };

// let maria = getDevObject("Maria", "HTML", "CSS", "JavaScript", "jQuery");

// console.log(maria);

// OUTPUTS
// {
//     devName: 'Maria',
//     jobSkills: [ 'HTML', 'CSS', 'JavaScript', 'jQuery' ]
//   }

/*
Challenge: addList

=======Difficulty: Basic

Prompt:

- Write a function called addList that accepts any quantity of numbers as arguments,
  adds them together and returns the resulting sum.
- Assume all parameters will be numbers. <=========
- If called with no arguments, return 0 (zero).

Examples:

addList(1) //=> 1
addList(1,50,1.23) //=> 52.23
addList(7,-12) //=> -5

*/

// Your solution for 01-addList here:

// function addList(...numArr) {
//   let sum = 0;
//   if (numArr) {
//     numArr.forEach((num) => {
//       sum = sum + num;
//     });
//     return sum;
//   } else return 0;
// }

// console.log(addList(1)); //=> 1
// console.log(addList(1, 50, 1.23)); //=> 52.23
// console.log(addList(7, -12)); //=> -5
// console.log(addList());

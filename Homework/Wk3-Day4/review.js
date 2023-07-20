/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/
/**
 * ------------
 * WK3 DAY4 HW
 * ------------
 * Mark Soro Assignment
 * @link https://replit.com/@msoro/Javascript-Review-W3-Day4-HW#index.js
 */

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to us we didn't do in class yet. That's on purpose, if you need assistance look back in lessons, and of course Google. :)

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let friend = "Rachel Green";
console.log("\n======== DECLARE A VARIABLE ========\n");
console.log(friend);
// 2.) Change the value of this variable
friend = "Phoebe Buffay";
console.log("\n======== CHANGE THE VALUE OF THIS VARIABLE ========\n");
console.log(friend);

// 3.) Change the data type of this variable
friend = 6;
console.log("\n======== CHANGE THE DATA TYPE OF THIS VARIABLE ========\n");
console.log(friend);
friend = "Monica Geller";

// 4.) Create another variable and the one from above to concatenate
let coupleFriends = "Chandler Bing" + " and " + friend;
console.log("\n======== CREATE ANOTHER AND CONCATENATE ========\n");
console.log(coupleFriends);

// 5.) Use any of the variables above or create new ones and print using string interpolation
let newFriend = "Rachel Green";
let threeFriends = `${newFriend} and ${coupleFriends}`;
console.log("\n======== PRINT USING STRING INTERPOLATION ========\n");
console.log(threeFriends);

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
let sabrina = "Sabrina";
console.log("\n======== charAt() ========\n");
console.log(sabrina.charAt(4));

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
let teddy = "Teddy";
console.log("\n======== UNICODE charCodeAt() ========\n");
console.log(teddy.charCodeAt(2));

// Using fromCharCode() - make it readable for us :). You'll see!
let unicode = teddy.charCodeAt(2);
console.log("\n======== CONVERT UNICODE TO STRING ========\n");
console.log(String.fromCharCode(unicode));
// Take your first and last name and concat()
let first = "Mark ";
let last = "Soro";
console.log("\n======== CONCAT() ========\n");
console.log(first.concat(last));
// Create a string and make it return true using startsWith()
let joey = "Joey Tribbiani";
console.log("\n======== STARTSWITH() ========\n");
console.log(joey.startsWith("J"));

// Now use any variable with endsWith() and return false
console.log("\n======== ENDSWITH() ========\n");
console.log(joey.endsWith("x"));

// Finish the following sentence. Use includes() and return true.
const ozgur =
  "Once upon a time Ozgur looked up at the Moon, and then I finished this sentence";
// convert string to array
const ozgurArray = ozgur.split(" ");
console.log("\n======== INCLUDES() ========\n");
console.log(ozgur.includes("sentence"));
// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow =
  "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone.";
console.log("\n======== INDEXOF() ========\n");
console.log(joshHadALittleLambOopsCow.indexOf("cow"));
// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

const vanessa =
  "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace.";
console.log("\n======== LASTINDEXOF() ========\n");
console.log(vanessa.lastIndexOf("Vanessa"));

// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?";
console.log("\n======== LENGTH OF STRING ========\n");
console.log(`Yes. Length of string is ${noWeCantTeo.length}`);

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!";
console.log("\n======== REPLACE() ========\n");
console.log(replaceGokuWithVegeta.replace("Goku", "Vegeta"));

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'.
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4";
console.log("\n======== SEARCH() ========\n");
console.log(joshIsLookingForWifey.search("wifey 2"));

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza";
console.log("\n======== SEARCH() AND SLICE() ========\n");
const otherHalf = pizzaSentence.slice(pizzaSentence.search("half"));
console.log(otherHalf);

// Now using the pizza sentence, return only pizza (before the comma)
const pizza = pizzaSentence.slice(0, pizzaSentence.search(","));
console.log("\n======== SEARCH() AND SLICE() ========\n");
console.log(pizza);
// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn";
const theGang = splitTheBill.split(" ");
console.log('\n======== SPLIT(" ") ========\n');
console.log(theGang);

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
const splitUp = splitTheBill.split("");
console.log('\n======== SPLIT("") ========\n');
console.log(splitUp);
// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS.";
console.log("\n======== TOLOWERCASE() ========\n");
const chill = angry.toLowerCase();
console.log(chill);
// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out.
console.log("\n======== TOUPPERCASE() & TOLOWERCASE() ========\n");
const angryTuan = "HEY THATS MY SANDWICH";
console.log(angryTuan.toUpperCase());
const chillTuan = angryTuan.toLowerCase();
console.log(chillTuan);
// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun";
console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase());

// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World";
console.log("\n======== SUBSTRING() ========\n");
console.log(basicGreeting.substring(1, 4));

// Returns "JavaScript"
const ohReally = "JavaScript Substring";
console.log("\n======== SUBSTRING() AND INDEXOF() ========\n");
console.log(ohReally.substring(0, ohReally.indexOf("Substring") - 1));
// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com";
console.log("\n======== SUBSTRING() AND INDEXOF() ========\n");
console.log(aslDays.substring(aslDays.indexOf("@")));

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
console.log("\n======== TRIM() ========\n");
const jerry = "    Jerry Seinfeld     ";
console.log(jerry.trim());

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true.
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke";

console.log("\n======== BOOLEANS ========\n");
console.log(a < b);
console.log(c > b);
console.log(d === d);
console.log(d !== a);
console.log(a < 15);
console.log(a < b < c);
console.log(c < b > a != d);

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
console.log("\n======== FOR LOOP 10 TIMES ========\n");
for (let i = 1; i <= 10; i++) {
  console.log(`Loop number: ${i}`);
}
// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
console.log("\n======== FOR LOOP 20 TIMES ========\n");
for (let i = 1; i <= 20; i++) {
  console.log(`Loop number: ${i}`);
}
// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
console.log("\n======== WHILE LOOP 20 TIMES ========\n");
let j = 1;
while (j <= 20) {
  console.log(`I'm sorry for the ${j}th time`);
  j++;
}

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :)

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: "shoes",
  thing2: "clothes",
  thing3: "gaming console",
};
console.log("\n======== FOR IN LOOP ========\n");
for (let property in whateverQueenBeySaid) {
  console.log(whateverQueenBeySaid[property]);
}

// Using (FOR IN LOOP), print the indexes of the array.
const lana = ["l", "a", "n", "a"];
console.log("\n======== FOR IN LOOP AND INDEX========\n");
for (let index in lana) {
  console.log(`${lana[index]} has index of ${index} `);
}

// USE (FOR OF LOOP)!
const tia = ["teo", "the", "syntax", "of", "this", "is", "cleaner"];
console.log("\n======== FOR OF LOOPS ========\n");
for (let elements of tia) {
  console.log(elements);
}

// Look into forEach() loop, it accepts a callback aka a function inside a function.
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable.
const perscholas = ["Amira", "Arely", "Jonathan"];

console.log("\n======== FOR EACH ========\n");
const demoForEach = () => {
  let myString = "PS";
  perscholas.forEach((name) => {
    console.log(`${name} - ${myString}`);
  });
};
demoForEach();

// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push()
// pop()
// unshift()
// shift()
// concat()
// splice()
// slice()
// sort()
// includes()
// indexOf()
// length

console.log("\n======== ARRAYS ========\n");

const fruits = ["apple", "banana", "orange"];
// Print banana
console.log(fruits[1]);

// Let's turn it up a notch. I won't tell you what array methods to use.

// Join all the elements of the array into a string separated by a space.
console.log("\n======== JOIN() ========\n");
console.log(fruits.join(" "));

// Remove orange
console.log("\n======== POP() ========\n");
fruits.pop();
console.log(fruits);

// Add strawberry, kiwi, and grapes at the end
console.log("\n======== PUSH() ========\n");
fruits.push("strawberry", "kiwi", "grapes");
console.log(fruits);

// Remove apple
console.log("\n======== SHIFT() ========\n");
fruits.shift();
console.log(fruits);

// Add mango at the beginning of the array
console.log("\n======== UNSHIFT() ========\n");
fruits.unshift("mango");
console.log(fruits);

// Add lemon, and grapefruit between mango and banana
console.log("\n======== SPLICE() TO ADD ========\n");
fruits.splice(1, 0, "lemon", "grapefruit"); // start at 1, delete 0, add lemon and grapefruit
console.log(fruits);

// Remove banana and strawberry
console.log("\n======== SPLICE() TO REMOVE ========\n");
fruits.splice(3, 2);
console.log(fruits);

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
console.log("\n======== CONCAT() ========\n");
const exoticFruits = ["dragon fruit", "star apple", "jack jruit"];
const allFruits = fruits.concat(exoticFruits);
console.log(allFruits);

// Print the last two exotic fruits without altering the newly concatenated array.
console.log("\n======== SLICE() ========\n");
console.log(allFruits.slice(-2));

// Monalissa said she needs help re-organizing her items in alphabetical order.
console.log("\n======== SORT() ========\n");
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"];
console.log(monalissaIsMessy.sort());

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = [
  "all",
  "them",
  "of",
  "greatest",
  "the",
  "is",
  "who",
];
console.log("\n======== REVERSE() ========\n");
console.log(mirrorMirrorOnTheWall.reverse());

// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :)
console.log("\n======== FILTER() ========\n");
const RafaelNoBadWords =
  "I am so tired of this badword food. I do not want this badword badword food.";

const filtered = (string) => {
  let stringArray = string.split(" ");
  let cleanString = "";
  stringArray.filter((word) => {
    word !== "badword" && (cleanString += word + " ");
  });
  return cleanString;
};
console.log(filtered(RafaelNoBadWords));

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231];

console.log("\n======== REDUCE() ========\n");
const addedUp = (array) => {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};

console.log(addedUp(numbersToAddUp));

// ===== SPREAD OPERATOR =====

// Create a variable and assign a value of a copied array using the spread operator
const copiedArray = [...numbersToAddUp];
console.log("\n======== SPREAD OPERATOR ========\n");
console.log(copiedArray);
// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
console.log("\n======== SPREAD OPERATOR 2 ARRAYS ========\n");
const array1 = ["a", "b", "c"];
const array2 = ["e", "f", "g"];
const combined = [...array1, ...array2];
console.log(combined);
// Using the variable with the newly connected arrays, use spread operator to add something at the end.
console.log("\n======== SPREAD OPERATOR AND PUSH() ========\n");
const array3 = ["h", "i", "j"];
combined.push(...array3);
console.log(combined);

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
console.log("\n======== SPREAD OPERATOR AND UNSHIFT() ========\n");
const array4 = ["x", "y", "z"];
combined.unshift(...array4);
console.log(combined);
// ===== ACCESS =====

// Donut Shopping
const donutShop = [
  ["firecracker", "chocolate", "blueberry"],
  [
    ["orange", "applecrumble"],
    ["cream", "peanutbutter", "coconut"],
  ],
  [[[[["flavor of the week"]], ["ihatethis"]]]],
];

// Anthony wants applecrumble. Print please!
console.log("\n======== ACCESSING ARRAYS ========\n");
console.log(donutShop[1][0][1]);
// Tosi wants ihatethis. :) Print!
console.log(donutShop[2][0][0][1][0]);

// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'
console.log("\n======== IF ELSE ========\n");
let teo = "person";
if (teo === "person") {
  console.log("Teo is a person");
  if (teo === "male") {
    console.log("You got it right!");
    if (teo === "hungry") {
      console.log("Let's buy Teo some tacos!");
    } else if (teo !== "hungry") {
      console.log("He doesn't need to eat.");
    } else {
      console.log("If Teo is not hungry, am I hungry?");
    }
  } else console.log("Wrong. Teo is going to remove you from the class.");
} else {
  console.log("teo is not a person!");
}

// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
console.log("\n======== TERNARY OPERATOR ========\n");
const gustavo = "coolest";
gustavo == "coolest"
  ? console.log("You got that right!")
  : console.log("James wants to argue. He says he's the best!");

// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
console.log("\n======== GREET FUNCTION ========\n");
const greet = () => console.log("Hello, ma'amsir!");
greet();

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
console.log("\n======== RETURN STRING ========\n");
const returnString = (str) => console.log(`This is my ${str}`);
returnString("Coconut");

// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
console.log("\n======== ADD FUNCTION ========\n");
const add = (n1, n2, n3) => n1 + n2 + n3;
let n1 = 2;
let n2 = 4;
let n3 = 6;
console.log(add(n1, n2, n3));

// Create a function called fightClub() that accepts a name parameter.  If the name:

// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts

console.log("\n======== FUNCTION AND TERNARY ========\n");
const fightClub = (name) => {
  return name === "Teo"
    ? "1st rule: You do not talk about Fight Club."
    : name === "Manara"
    ? "2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB."
    : name === "Liv"
    ? '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
    : name === "Devin"
    ? "4th rule: Only two guys to a fight."
    : "No shirts";
};
console.log(fightClub("Teo"));
console.log(fightClub("Liv"));
console.log(fightClub("Mark"));
// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.
console.log("\n======== ANONYMOUS FUNCTION INSIDE A FUNCTION ========\n");
const hello = () => {
  console.log("hello");
  const goodbye = () => {
    console.log("goodbye");
  };
  goodbye();
};
hello();
// Create a function expression with your first name as the variable and then print your first and last name
console.log("\n======== NAME FUNCTION ========\n");
const helloName = (firstName) => `${firstName} Soro`;
console.log(helloName("Mark"));

// Create an arrow function that accepts a number and have it return that number doubled
console.log("\n======== ARROW FUNCTION DOUBLE THE NUMBER ========\n");
const dbl = (n) => n * 2;
console.log(dbl(6));
// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.
const Human = {
  myName: "Mark",
  age: 34,
  location: "VA",
};

// Access the name using dot notation
console.log("\n======== ACCESS USING DOT NOTATION ========\n");
console.log(Human.myName);

// Access the age using square brackets
console.log("\n======== ACCESS USING BRACKET NOTATION ========\n");
console.log(Human["myName"]);
// Use object destructuring to access location
console.log("\n======== OBJECT DESTRUCTURING ========\n");
const { myName, age, location } = Human;
console.log(myName);
console.log(age);
console.log(location);

// ACCESS Granted
const bulbasaur = {
  name: "Bulbasaur",
  abilities: [
    {
      ability: "overgrow",
    },
    {
      ability: "chlorophyll",
    },
  ],
  moves: ["razor-wind", "swords-dance", "cut"],
  sound: function () {
    console.log("Bulbahhhh!!!!!");
  },
};

console.log("\n======== ACCESS OBJECT ========\n");
// Print overgrow
console.log(bulbasaur.abilities[0]);

// Print cut
console.log(bulbasaur.moves[2]);
// Print Bulbahhhh!!!!!
bulbasaur.sound();
// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
bulbasaur.height = 7;
console.log(bulbasaur);
// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur["order"] = 1;
console.log(bulbasaur);
// Print an array that contains every single properties in bulbasaur
console.log(Object.keys(bulbasaur));
// Print every single properties one by one in the console
console.log(Object.values(bulbasaur));
// Print an array that contains every single values in bulbasaur
console.log("\n======== ITERATE ON AN OBJECT ========\n");
const objVal = (obj) => {
  for (let val in obj) {
    console.log(obj[val]);
  }
};

objVal(bulbasaur);

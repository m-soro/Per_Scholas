/**
 * Mark Soro
 * Wk4-Day2 HW/Lab
 * @link https://replit.com/@msoro/JavascriptReviewLabHW-Wk4Day2#index.js
 */

/**

console.log("\n======== I. VARIABLES & DATATYPES ========\n")
console.log("\n======== A. Q + A ========\n")
(1)How do we assign a value to a variable?
-we use the assignment operator "=" the value on the right will be assigned on the left.
(2)How do we change the value of a variable?
-same as assigning variable, except const anything declared on const cannot be re-declared
(3)How do we assign an existing variable to a new variable?
-same as assigning variables, except const
(4)Remind me, what are declare, assign, and define?
-declare doesnt have to have any value, youre just letting the computer universe know to reserve a space in memeory for this variable
-assign means to give this variable a value, you can declare and assign at the same time or re assign a value to a variable
-define is the same as declare i think?
(5)What is pseudocoding and why should you do it?
-i should personally get into this habit but, i dont. this is a process of translating the code problems into human friendly language
-writing the solution code first in human friendly form and gthen translating this into actual computer code
(6)What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
- You should spend 95% thinking and 5% typing code.
 * 
 */

console.log("\n======== B. STRINGS ========\n");
//1
let firstVariable;
//2
firstVariable = "Hello World";
//3
firstVariable = 3;
//4
let secondVariable = firstVariable;
//5
secondVariable = "My String";
//6
console.log(firstVariable); // should be 3
//7
let yourName = "Mark";
//7
const helloMyName = function (name) {
  console.log(`Hello my name is ${name}`);
};
helloMyName(yourName);

console.log("\n======== C. BOOLEANS ========\n");

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a < b || c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a === a || d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== "48");

console.log("\n======== D. THE FARM ========\n");

let animal = "cow";
animal === "cow" ? console.log("Moo") : console.log("Hey! You're not a cow");
//4 Commit - I will push this all to github =)

console.log("\n======== E. DRIVER'S ED ========\n");

let age = 18;
//prettier-ignore
age >= 16 ? console.log("Here are the keys") : console.log("Sorry you're too young.")

console.log("\n======== II. LOOPS ========\n");

for (let n = 0; n <= 10; n++) console.log(n);
console.log("\n===========================\n");
for (let n = 10; n <= 400; n++) console.log(n);
console.log("\n===========================\n");
for (let n = 12; n <= 4000; n += 3) console.log(n);

console.log("\n======== B. GET EVEN ========\n");
for (let n = 0; n <= 100; n++) {
  n % 2 === 0 ? console.log(`${n}<-- is an even number`) : console.log(n);
}

console.log("\n======== C. GIVE ME FIVE ========\n");
for (let n = 1; n <= 100; n++) {
  n % 5 === 0 && n % 3 === 0
    ? //prettier-ignore
      console.log(`I found a ${n}. High five! AND I found a ${n}. Three is a crowd`)
    : n % 5 === 0
    ? console.log(`I found a ${n}. High five!`)
    : n % 3 === 0
    ? console.log(`I found a ${n}. Three is a crowd`)
    : console.log(n);
}

console.log("\n======== D. SAVINGS ACCOUNT ========\n");
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//prettier-ignore
const bank_account = nums.reduce((accumulator, nextElement) => accumulator + nextElement);
console.log(bank_account);

let numsTo100 = [];
for (let i = 1; i <= 100; i++) numsTo100.push(i);
// console.log(numsTo100);
//prettier-ignore
const bank_accountDoubled = 2*(numsTo100.reduce((accumulator, nextElement) => (accumulator + nextElement)))
console.log(bank_accountDoubled);

console.log("\n======== III. ARRAYS & CONTROL FLOW ========\n");

/**
A. Talk about it:
What are the things in an array called?
- Elements
Do Arrays guarantee those things will be in order?
- Yes, arrays are indexed
What real-life thing could you model with an array?
- the sequence of an alphabet, sequence of numbers, steps for recipe,
 */

console.log("\n======== B. EASY DOES IT ========\n");
const quotes = [
  "Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.",
  "The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it, as long as you really believe 100 percent.",
  "Just remember, you can't climb the ladder of success with your hands in your pockets.",
];
console.log(`Array quotes has: ${quotes.length} elements`);

const randomThings = [1, 10, "Hello", true];
console.log(`The first element is : ${randomThings[0]}`);
console.log(`After change: ${(randomThings[2] = "World")}`);
console.log(randomThings);
console.log("\n======== D. CHANGE VALUES ========\n");
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(`Third Element is ${ourClass[2]}`);
ourClass[ourClass.length - 1] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);

console.log("\n======== E. MIX IT UP ========\n");

// remember .splice() is multi-purpose!
const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.push("Mark's String");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
console.log(myArray);
myArray.reverse();
console.log(myArray);
console.log(
  "Reverse just returns the reversed Array it mutates the array permanently, mutate means to change the original data"
);

console.log("\n======== F. BIGGIE SMALLS ========\n");

const bigOrSmall = 5;
if (bigOrSmall) {
  console.log("Little Number");
} else {
  console.log("Big Number");
}

console.log("\n======== G. MONKEY IN THE MIDDLE ========\n");
const monkeyInMiddle = 11;
if (monkeyInMiddle < 5) {
  console.log("little Number");
} else if (monkeyInMiddle > 10) {
  console.log("Big Number");
} else {
  console.log("Monkey");
}

console.log("\n======== H. WHAT'S IN YOUR CLOSET? ========\n");

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
kristynsCloset.splice(6, 0, "raybans");
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

console.log(`Thom's first shirt: ${thomsCloset[0][0]}`);
console.log(`Thom's Pants: ${thomsCloset[1][1]}`);
console.log(`Thom's Accessories: ${thomsCloset[2][2]}`);
//prettier-ignore
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][2]}`)
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset[1][2]);

console.log("\n======== IV. FUNCTIONS ========\n");

// =( I actually did this! did not read the second paragraph in the bottom! Good tip!
const greet = (urName) => console.log(`Hello there, ${urName}!`);
greet("Mark");

const printCool = (urName) => console.log(`${urName} is cool`);
greet("Batman");

const calculateCube = (n) => n * n * n;
console.log(calculateCube(5));

const vowels = ["a", "e", "i", "o", "u"];
//prettier-ignore
const isVowel = (letter) => vowels.includes(letter.toLowerCase()) ? true : false;
console.log(isVowel("A"));
console.log(isVowel("b"));
console.log(isVowel("I"));

const getTwoLengths = (s1, s2) => {
  const result = [];
  (result[0] = s1.length) && (result[1] = s2.length);
  return result;
};
console.log(getTwoLengths("Hank", "Hippopopalous"));

const getMultipleLengths = (array) => {
  return array.map((word) => word.length);
};

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); //=> [5, 4, 2, 2, 4]

const maxOfThree = (n1, n2, n3) => {
  return n3 > (n1 > n2 ? n1 : n2) ? n3 : n1 > n2 ? n1 : n2;
};
console.log(maxOfThree(6, 9, 1));
console.log(maxOfThree(2, 2, 2));
console.log(maxOfThree(10, 20, 100));

const printLongestWord = (array) => {
  const ints = array.map((word) => word.length);
  const maxInArray = Math.max(...ints);
  let long = "";
  ints.forEach((word, index) => {
    if (word === maxInArray) {
      long = array[index];
    }
  });
  return long;
};
//prettier-ignore
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))

console.log("\n======== OBJECTS ========\n");

const user = {
  userName: "rachel.green",
  email: "rachel.green@aol.com",
  age: 30,
  purchased: [],
};

// Im confused with the instruction? It says do not modify the original object?
// Does that mean make a copy? - I made a copy instead.
// I'm not sure if I was supposed to make a class here. There is no mention of class
// at all in the instruction
console.log(user);
let cloneOfUser = { ...user };
cloneOfUser.email = "rgreen.aol.com";
cloneOfUser.age += 1;
cloneOfUser.location = "new york city";
cloneOfUser.purchased.push("cabohydrates");
cloneOfUser.purchased.push("peace of mind");
cloneOfUser.purchased.push("Merino jodhpurs");
console.log(cloneOfUser.purchased[cloneOfUser.purchased.length - 1]);

user.friend = {
  name: "monica geller",
  age: "32",
  location: "new york city",
  purchased: [],
};

console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
console.log(user.friend.age);
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased[user.friend.purchased.length - 1]);

console.log("\n======== F. LOOPS ========\n");

for (let items in cloneOfUser.purchased) {
  console.log(cloneOfUser.purchased[items]);
}
console.log("\n==========================\n");
for (let items in user.friend.purchased) {
  console.log(user.friend.purchased[items]);
}

console.log("\n======== FUNCTIONS CAN OPERATE ON OBJECTS ========\n");

console.log("\n======== FUNCTION1 ========\n");
const updateUser = () => (cloneOfUser.age += 1);
cloneOfUser.userName = cloneOfUser.userName.toUpperCase();

updateUser();
console.log(cloneOfUser);

console.log("\n======== FUNCTION2 ========\n");
function oldAndLoud(person) {
  person.age += 1;
  person.userName = person.userName.toUpperCase();
}

oldAndLoud(cloneOfUser);
console.log(cloneOfUser);

console.log("\n======== REQUIREMENTS COMPLETE! HUNGRY FOR MORE? ========\n");

console.log("\n======== CAT COMBINATOR ========\n");

const cat1 = {
  catName: "phoebe",
  breed: "persian",
  age: 5,
};

// console.log(cat1.age);
// console.log(cat1.breed);

const cat2 = {
  catName: "joey",
  breed: "siamese",
  age: 6,
};

/**
name is a concatenation of the parents' names
the age is 1
the breed is each of the parents' breeds with a hyphen in between} cat1 
 */

const combineCats = (cat1, cat2) => {
  let combinedCat = {};
  for (let key in (cat1, cat2)) {
    if (key === "catName") {
      combinedCat.catName = `${cat1[key]}-${cat2[key]}`;
      console.log(`The cat's name is: ${cat1[key]}-${cat2[key]}`);
    }
    if (key === "age") {
      combinedCat.age = 1;
      console.log(`The age is 1`);
    }
    if (key === "breed") {
      combinedCat.breed = `${cat1[key]}-${cat2[key]}`;
      console.log(`The breed is: ${cat1[key]}-${cat2[key]}`);
    }
  }
  return combinedCat;
};

combineCats(cat1, cat2);

console.log("\n======== KITTEN ========\n");
const kitten = combineCats(cat1, cat2);
console.log(kitten);

console.log("\n======== CAT BRAIN BENDER ========\n");

/**
 If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:
catCombinatorcan use itself as its own argument.
Take a second to stew on that . . .
What is the result of:
 */

console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

/**
The above console.log is two levels deep of combineCats.
Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
Your output should look something like:
 */
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

// WHOA?!

console.log(
  combineCats(
    combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),
    combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))
  )
);

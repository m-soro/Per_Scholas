/**
 * REPL @link https://replit.com/@msoro/JavaScript-Classes-HW-Wk3-Day2-HW#index.js
 */

/**
 * -----------------
 * CREATING CLASSES
 * -----------------
 * give the class at least 3 properties
 * give the class at least 3 methods
 * create two instances of the class (two cats)
 * log both instances to see their properties
 * invoke each method from both instances
 */

class Cat {
  constructor(name, color, weight, isFriendly) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.isFriendly = isFriendly;
  }
  meow() {
    return "meow";
  }
  scratch() {
    return "I'm going to scratch you";
  }
  makeFriendly() {
    this.isFriendly = true;
    return this.isFriendly;
  }
}
console.log("\nExercise 1 - Creating Classes\n");
const cat1 = new Cat("white", "8lbs", false);
console.log("Cat 1\n");
console.log(cat1);
console.log(cat1.meow());
console.log(cat1.makeFriendly());
console.log(cat1);

const cat2 = new Cat("brown", "10lbs", true);
console.log("Cat2\n");
console.log(cat2);
console.log(cat1.scratch());
console.log(cat1.makeFriendly());

/**
 * -------------
 * CONSTRUCTORS
 * -------------
 * create 3 properties that are set by the constructor
 * create 3 methods
 * instantiate 2 arraysof 3 pirates, name the arrays after
 * your favorite pirate ships, jollyRoger and blackPearl
 * loop over each array and print 3 properties of each pirate
 */

class Pirate {
  // Properties
  constructor(name, size, capacity) {
    this.name = name;
    this.size = size;
    this.capacity = capacity;
  }
  // Methods
  fireCannon() {
    return "Boom!";
  }
  throwPirate(pirateAmount) {
    return `Mutiny on the ship? Captain is ordering ${pirateAmount} to be thrown from ${
      this.capacity
    } men down to ${(this.capacity = -pirateAmount)}`;
  }
  attack() {
    return `The men of ${this.name} is coming for you!`;
  }
}

// Instatiate from the contsructor
const theGoodPlunder = new Pirate("theGoodPlunder", "500 ft", 300);
const theDavyJonesSlave = new Pirate("theDavyJonesSlave", "550 ft", 350);
const theCrimsonJewel = new Pirate("theCrimsonJewel", "400 ft", 300);
const thePrivateersDragon = new Pirate("thePrivateersDragon", "600 ft", 600);
const theSuddenAnger = new Pirate("theSuddenAnger", "550 ft", 550);
const theCryOfTheCorsair = new Pirate("theCryOfTheCorsair", "450 ft", 400);

// Group into two arrays
const jollyRoger = [theGoodPlunder, theDavyJonesSlave, theCrimsonJewel];
const blackPearl = [thePrivateersDragon, theSuddenAnger, theCryOfTheCorsair];

// function to print ship's properties from the array
const printShips = (array) => {
  console.log("\nThe ships from array are below\n");
  for (let i = 0; i <= array.length - 1; i++) {
    console.log(array[i]);
  }
};
console.log("\nExercise 2 - Creating Instances with Constructors\n");
printShips(jollyRoger);
printShips(blackPearl);

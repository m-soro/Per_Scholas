/**
 * -------
 * OBJECT
 * -------
 */
// const adventurer = {
//   name: "Mark",
//   hitpoints: 10,
//   belongings: ["sword", "potions", "Tums"],
// };

// console.log(adventurer);

/**
 * ------------------------------------
 * LOG AND ITERATE ARRAY INSIDE OBJECT
 * ------------------------------------
 */
// console.log(adventurer.belongings[2]);

// for (let i = 0; i < adventurer.belongings.length; i++) {
//   console.log(adventurer.belongings[i]);
// }

/**
 * -------------------------
 * OBJECTS INSIDE AN OBJECT
 * -------------------------
 */
const Adventurer = {
  name: "Mark",
  hitpoints: 10,
  belongings: ["sword", "potions", "Tums"],
  companion: {
    name: "Velma",
    type: "Bat",
    companion: {
      name: "Tim",
      type: "Parasite",
      belongings: ["SCUBA tank", "Rogan josh", "health insurance"],
    },
  },
};

// console.log(adventurer.companion);

/**
 * ------------------------------
 * RETURN TIM'S HEALTH INSURANCE
 * ------------------------------
 */
// console.log(adventurer.companion.companion.belongings[2]);

/**
 * -----------------------
 * USE AN ARRAY OF OBJECT
 * -----------------------
 */

const movies = [
  { title: "Tokyo Story" },
  { title: "Paul Blart: Mall Cop" },
  { title: "L'Avventura" },
];

// movies.forEach((mv) => {
//   console.log(mv);
//   console.log(mv.title);
// });

/**
 * --------------------------------------
 * ASSIGN A METHOD TO A KEY IN AN OBJECT
 * --------------------------------------
 */
const myObj = {
  someMethod: () => {
    return "oh hai Mark!";
  },
};

// console.log(myObj.someMethod());

/**
 * ----------------------------------------
 * CREATE A FUNCTION TO CREATE A NEW OBJECT
 * ----------------------------------------
 */
const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
  const newEnemy = {
    nameIs: nameIs,
    healthIs: healthIs,
    powerIs: powerIs,
    staminaIs: staminaIs,
  };
  return createEnemy;
};

const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
  const newPlayer = {
    name: nameIs,
    health: healthIs,
    power: powerIs,
    stamina: staminaIs,
  };
  return createPlayer;
};

/**
 * -----------------------------
 * OR YOU CAN MAKE THIS GENERAL
 * -----------------------------
 * kind of like an classes - this is a blueprint
 * This is not a Class - Class is coming up!!!
 */
const createActor = (nameIs, healthIs, powerIs, staminaIs) => {
  const newPlayer = {
    name: nameIs,
    health: healthIs,
    power: powerIs,
    stamina: staminaIs,
  };
  return newPlayer;
};

const collection = [];

const char1 = createActor("Mark", 99, 1, 1);
const char2 = createActor("MrX", -999, 1, 100);
const char3 = createActor("MrY", 1000, 3, 200);

collection.push(char1);
collection.push(char2);
collection.push(char3);

// console.log(collection);

/**
 * ------
 * CLASS
 * ------
 *
 */
class Character {
  constructor(hair, eyes, name, lovesCats, lovesDogs) {
    // lets give the instatiated objects permanent values
    this.legs = 2;
    this.arms = 2;
    // OR A CUSTOM VALUES
    this.hair = hair;
    this.eyes = eyes;
    this.name = name;

    Character.prototype.lovesCats = lovesCats;
    // this.lovesCats = lovesCats;

    this.lovesDogs = lovesDogs || false; // assigning values to lovesDogs property
    Character.prototype.introduce = console.log(`I am ${this.name}`);
  }

  // this method doesnt really belonog to the class
  // this method is getting assigned to the instantiated object
  greet(otherPerson) {
    console.log(`${this.name} says "Oh hi ${otherPerson}!"`);
  }
  greetOther(otherPerson) {
    console.log(`${this.name} says "Oh hi ${otherPerson.name}!"`);
  }
  customMsg(msg) {
    console.log(`${msg}`);
  }
  smite() {
    console.log("I smite thee you vile person");
  }
}

/**
 * ------------------
 * EXTENDING A CLASS
 * ------------------
 */

class Hobbit extends Character {
  constructor(hair, eyes, name, lovesCats, lovesDogs) {
    super(hair, eyes, name, lovesCats, lovesDogs);
    this.skills = ["thievery", "speed", "willpower"];
  }
  steal() {
    console.log("let's get away");
  }
  smite() {
    console.log("This Hobbit smites you!");
  }
}

/**
 * --------------------------------------
 * CREATING OBJECT INSTANCE OF THE CLASS
 * --------------------------------------
 */
const me = new Character("red", "green", "Mark");
const you = new Character("purple", "blue", "Johnny");

/**
 * -------------------
 * CHECKING THE TYPES
 * -------------------
 */

console.log(me, you);
console.log(typeof me);
console.log(typeof you);
console.log(`the collection array is also typeof ${typeof collection}`);

/**
 * --------------------------------------------
 * USING THE METHOD OF THE INSTANTIATED OBJECT
 * --------------------------------------------
 */
you.greet("Johnny");
you.customMsg("This is a custom Message!");

/**
 * -------------------------------
 * ME AND YOU OBJECTS INTERACTING
 * -------------------------------
 */
me.greet(you.name);

/**
 * --------------------------------
 * CHANGING OBJECT PROPERTY VALUES
 * --------------------------------
 * You can BUT YOU SHOULD NOT!
 */
// me.name = "Max";
// me.legs = 20;
// console.log(me);

/**
 * -------------------------------------
 * CREATE ANOTHER CLASS AND CALL METHOD
 * -------------------------------------
 */
const other = new Character("pink", "brown", "Madge", false, true);
other.greetOther(you);
console.log(other.lovesCats);

const him = Object.create(Adventurer);
console.log(typeof him);
console.log(him.name);

const frodo = new Hobbit("rainbow", " blue", "Frodo", false, true);
console.log(frodo);

// Only the Hobbit class has this methods!
frodo.steal();
frodo.smite();

/**
 * -----------------------------------------
 * AN OBJECT THAT CREATES ANOTHER OBJECT
 * -----------------------------------------
 * Also called a singleton
 */

class Car {
  constructor(maker, serialNumber) {
    this.maker = maker;
    this.serialNumber = serialNumber;
  }
  drive() {
    console.log("Vroom Vroom");
  }
}

const newCar = new Car("Mazda", 123456);

/**
 * -----------------
 *  OBJECT FACTORY
 * -----------------
 */
class Factory {
  constructor(company) {
    this.company = company;
    this.cars = [];
  }
  generateCar() {
    const newCar = new Car(this.company, this.cars.length);

    this.cars.push(newCar);
  }
  findCar(index) {
    return this.cars[index];
  }
}

const newFactory = new Factory("Tesla");
console.log(newFactory);

console.log(newFactory.generateCar());
console.log(newFactory.generateCar());
console.log(newFactory.generateCar());
console.log(newFactory.generateCar());
console.log(newFactory);

console.log(
  "Let's get the first car in the array -> \n",
  newFactory.findCar(0)
);

/**
 * -------------------------------------
 * CREATE STATIC PROPERTIES FOR A CLASS
 * -------------------------------------
 */

class Person {
  static eyeColors() {
    return ["blue", "green", "brown"];
  }
}
class SuperHero {
  constructor(name, age, hair) {
    this.name = name;
    this.age = age;
    this.eyeColors;
    this.hair = hair;
  }
}

console.log(Person);
console.log(Person.eyeColors());

const superman = new SuperHero(
  "Clark Kent",
  30,
  Person.eyeColors()[0],
  "black"
);

console.log(superman);

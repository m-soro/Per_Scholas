/**
 * -------------
 * INTRO TO OOP
 * -------------
 * Properties are just like variables but they belong to the object
 * Object properties are not sequential
 * Arrays are declared using the square brackets const arr = [];
*  Objects are declared using the curly braces const obj = {}
*  Objects contain key-value pairs. They are are the properties of the object

*  A key is like an index in an array, but it has
*  a name
*  it is unique
*  A key is really a string but we can omit the quotes.

*  A value is what a key refers to, and can be any datatype.
 */

const car = {
  color: "blue",
  hp: 4000,
  year: 1989,
  other: "property for no other reason",
};
console.log(car);
console.log(car.year);
console.log(car.hp);
console.log(car.other);

/**
 * ----------------------
 * ADD OBJECT PROPERTIES
 * ----------------------
 * Assigning object property
 */
const house = {
  doors: 9,
};
console.log(house);
house.windows = 30;
console.log(house);
house.hasGarden = true;
console.log(house);

/**
 * ------------------
 * OBJECTS VS ARRAYS
 * ------------------
 * If the thing you want to model is just a list, use an array.
 * If the thing want to model has properties, use an object.
 * And for more simple things use Strings, Numbers, Booleans
 */
const myArr = ["a", "b", "c"];

const form = {
  name: "MSoro",
  email: "napoleon_soro@rocketmail.com",
  password: "helloworld123",
};

console.log(form);
console.log(form.name);

function getFormNameUpperCase() {
  return form.name.toUpperCase();
}

console.log(getFormNameUpperCase());

/**
 * --------------------------
 * NOT USUALLY DONE THIS WAY
 * --------------------------
 * We use constructors!
 */
const person1 = {
  name: "Monica",
  job: "Chef",
};
const person2 = {
  name: "Rachel",
  job: "Purchasing Manager",
};
const person3 = {
  name: "Ross",
  job: "Scientist",
};
const person4 = {
  name: "Joey",
  job: "Actor",
};
const person5 = {
  name: "Chandler",
  job: "Banker",
};
const person6 = {
  name: "Phoebe",
  job: "Masseuse",
};

const friends = [person1, person2, person3, person4, person5, person6];

for (let i = 0; i < friends.length; i++) {
  console.log(`${friends[i].name}'s job is ${friends[i].job}`);
}

/**
 * ------------------------------------------------
 * MANIPULATE OBJECTS AND ARRAYS DECLARED AS CONST
 * ------------------------------------------------
 * const only prevents you from reassigning a variable, it doesn't
 * prevent you from adding or changing elements of arrays or properties of objects.
 */

// const obj = {
//   salutation: "hi",
//   count: 4,
// };
// if (obj.salutation === "hi") {
//   console.log("ok");
// }

// for (let i = 0; i < obj.count; i++) {
//   console.log(i);
// }

// You can test to see if a property exists on an object:
const obj = {
  something: "wuttt",
};

if (obj.something) {
  console.log("ok");
}
if (obj.anotherthing) {
  console.log("ok");
} else {
  console.log("no go i dont have that property");
}
// This is because accessing a property that doesn't exist on an
// object gives you undefinedwhich is treated as false.

/**
 * ---------------------
 * ENCAPSULATION IN OOP
 * ---------------------
 * Encapsulation is a key principle of Object Oriented Programming.
 * Encapsulation is the concept of bundling data (properties/attributes)
 * and related behavior (methods) within an object.
 * Encapsulation is a theoretical concept, object properties and methods
 */

const cohort = {
  // What it is - What it knows
  id: "SEIR Flex Madeline",
  students: ["Diana", "Julio", "Cory"],
  instructors: ["Arthur", "Nando", "Teo", "Sean"],

  // What it does - its behavior
  addStudent: function (name) {
    name = name[0].toUpperCase() + name.substr(1).toLowerCase();
    this.students.push(name);
  },
  pickRandomStudent: function () {
    const rndIdx = Math.floor(Math.random() * this.students.length);
    return this.students[rndIdx];
  },
};

/**
 * ------------------------
 * DEFINING CLASSES IN JS
 * ------------------------
 * instance -  an object created by class
 * instatiate - we instatntiate a class to create an object
 * instatitaion - the process of creating an object
 */

class Vehicle {
  constructor(vin, make, model) {
    this.vin = vin;
    this.make = make;
    this.model = model;
    this.running = false;
  }
  start() {
    this.running = true;
    console.log("This car running...");
    console.log(this.running);
  }
}

const v1 = new Vehicle();
const plane = new Vehicle("X123Y", 2015, "Boeing");
const car1 = new Vehicle("Y2KXY", 2021, "Camry");
console.log(v1);
console.log(plane);
console.log(car1);
car1.start();
console.log(car1);
/**
 * ------------------------------------------------------
 * YOU CAN ALSO CREATE A FUNCTION TO CREATE FROM A CLASS
 * ------------------------------------------------------
 */

function createCars() {
  let numObj = 3;
  let vins = ["XYZ123", "ABCZ123", "DEF123"];
  let makes = [2015, 2020, 2019];
  let models = ["Honda", "Mazda", "Jaguar"];
  let cars = ["HondaCar", "MazdaCar", "JaguarCar"];
  let funcArray = [];

  for (let i = 0; i < numObj; i++) {
    funcArray.push((cars[i] = new Vehicle(vins[i], makes[i], models[i])));
  }
  return funcArray;
}

// console.log(createCars());
let carsArrray = createCars();
console.log(carsArrray);

/**
 * ----------------------------
 * DEFINING METHODS IN A CLASS
 * ----------------------------
 */

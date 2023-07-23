/*
  WRITE YOUR SOLUTION HERE
*/

/**
 * ------------
 * MY SOLUTION
 * ------------
 * Nullish Coalescing Operator (??) came in handy here!
 */

// function* getStop(array) {
//   yield* array;
// }
// const trainStops = [
//   "Poughkeepsie",
//   "Newburgh",
//   "Peekskill",
//   "Yonkers",
//   "Bronx",
//   "Grand Central",
// ];
// const generateTrainStops = getStop(trainStops);

// const nextStop = document.querySelector("#next-stop");
// nextStop.addEventListener("click", () => {
//   //prettier-ignore
//   console.log(generateTrainStops.next().value ?? (nextStop.setAttribute("disabled","true"), "We made it!"));
//   // if not null, return value, if null, return default &&  disbale the button
// });

/**
 * --------------------
 * INSTRUCTOR SOLUTION
 * --------------------
 */

// function* getStop() {
//   yield "Poughkeepsie";
//   yield "Newburgh";
//   yield "Peekskill";
//   yield "Yonkers";
//   yield "Bronx";
//   yield "Grand Central";
// }
// const nycTrainLine = getStop();
// const nextStopButton = document.querySelector("#next-stop");
// nextStopButton.addEventListener("click", () => {
//   let currStop = nycTrainLine.next();
//   if (currStop.done) {
//     console.log("We made it");
//     nextStopButton.setAttribute("disabled", "true");
//   } else {
//     console.log(currStop.value);
//   }
// });

/**
 * -------------------
 * GENERATOR FUNCTION
 * -------------------
 * The purpose of generator is to run some code and then run another value
 * and then on and on and on by calling the:
 * .next() property of the generator object
 *
 * To exit out of generator use the return() no mmatter how much more to go
 * and it will return the value you pass it
 *
 * @link https://www.youtube.com/watch?v=IJ6EgdiI_wU
 */

// function* simpleGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const generatorObject = simpleGenerator();
// this is aseparate generator object
// const generatorObject2 = simpleGenerator();

// console.log(generatorObject);
// console.log(generatorObject.next());
// console.log(generatorObject.next());

// this is a separate generator object
// console.log(generatorObject2.next());
// console.log(generatorObject2.next());

/**
 * ------------------
 * GENERATOR EXAMPLE
 * ------------------
 * An infinite loop
 * Can be used to create unique identifier
 */

// function* generateId() {
//   let id = 1;

//   while (true) {
//     yield id; // this will increment by 1 every .next()
//     id++;
//   }
// }
// This can go on and on and on
// const generatorObj = generateId();
// console.log(generatorObj.next()); // 1
// console.log(generatorObj.next()); // 2
// console.log(generatorObj.next()); // 3
// console.log(generatorObj.next()); // 4

// this will exit out of the generator function
// console.log(generatorObj.return(10)); // 5

// this will throw an error
// console.log(generatorObj.throw(new Error("Im an error")));

// console.log(generatorObj.next()); // 6
// console.log(generatorObj.next()); // 7
// console.log(generatorObj.next()); // 8

// A reset
// const generatorObj2 = generateId();
// console.log(generatorObj2.next()); // 1
// console.log(generatorObj2.next()); // 2
// console.log(generatorObj2.next()); // 3
// console.log(generatorObj2.next()); // 4

/**
 * --------------------------
 * PASSING A VALUE TO NEXT()
 * --------------------------
 * Passing a value to the firts next do nothing since
 * beacuse there is nothing to yield to.
 * pass the value to the second next for result
 */

// function* generateIdPassingValue() {
//   let id = 1;

//   while (true) {
//     const increment = yield id;
// if increment is not null, then id + increment otherwise increment by 1
// increment != null ? (id += increment) : id++;
//   }
// }
// const generateIdPassingValueObj = generateIdPassingValue();
// console.log(generateIdPassingValueObj.next()); // 1
// console.log(generateIdPassingValueObj.next(2)); // 3
// console.log(generateIdPassingValueObj.next()); // 4
// console.log(generateIdPassingValueObj.next(2)); // 6
// console.log(generateIdPassingValueObj.next(3)); // 9

/**
 * -------------------
 * USE AS ITERATOR
 * -------------------
 */

// essentially saying that while the object.next() done property is not false
// keep iterating

//while (object.next().done !== false) {
// some code
//}

/**
 * ----------------------
 * ITERATOR FOR AN ARRAY
 * ----------------------
 * Below is an easy way to create a generator for an array
 */

// function* generatorArray(array) {
// for (let i = 0; i < array.length; i++) {
//   yield [i];
// }

// same as above!
// yield* array;
// }

// const generatorObjArray = generatorArray([1, 2, 3, 4, 5]);
// console.log(generatorObjArray.next());
// console.log(generatorObjArray.next());
// console.log(generatorObjArray.next.done === true);
// console.log(generatorObjArray.next());
// console.log(generatorObjArray.next());
// console.log(generatorObjArray.next());

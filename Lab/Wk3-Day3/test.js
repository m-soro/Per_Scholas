// function higherOrder(callBack) {
//   return callBack(2);
// }

// function timesTwo(n) {
//   return n * 2;
// }

// console.log(higherOrder(timesTwo));

let letters = ["a", "b", "c", "d", "e"];
let pick = letters[Math.floor(Math.random() * letters.length)];

const letterValues = (pick) => {
  return pick === "a"
    ? "Alpha"
    : pick === "b"
    ? "Beta"
    : pick === "c"
    ? "Charlie"
    : pick === "d"
    ? "Delta"
    : "Echo";
};

// console.log(letterValues(pick));

const caps = letters.map((letter) => letter.toUpperCase());
// console.log(caps);

const addLetters = letters.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
// console.log(addLetters);

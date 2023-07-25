// // my solution
// function staircase(n) {
//   let gap = n;
//   for (let i = 1; i <= n; i++) {
//     console.log(" ".repeat(gap - i) + "#".repeat(i));
//     // console.log(" ".repeat((gap -= 1)), "#".repeat(i));
//   }
// }
// staircase(6);

// // google
// function stairs(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(" ".repeat(n - i) + "#".repeat(i));
//   }
// }

// stairs(6);

// function diagonalDifference(arr) {
// Write your code here

// }

const printLongestWord = (array) => {
  let maxLetters = "string";
  array.forEach((word) => {
    word.length > maxLetters.length && (maxLetters = word);
  });
  return maxLetters;
};
//prettier-ignore
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))

/*
  WRITE YOUR SOLUTION HERE
*/

/**
 * ------------
 * MY SOLUTION
 * ------------
 * Instead of just having one event listener, a better approach is to add three
 * separate event listeners. Just like the instructor's solution
 */
// const blue = document.querySelector("#blue"); // #38598b
// const pink = document.querySelector("#pink"); // #f76b8a
// const green = document.querySelector("#green"); // #97cba9
// const body = document.querySelector("body");

// const changeColor = (btn) => {
//   btn.addEventListener("click", () => {
//     btn.id === "blue"
//       ? (body.style.background = "#38598b")
//       : btn.id === "pink"
//       ? (body.style.background = "#f76b8a")
//       : btn.id === "green"
//       ? (body.style.background = "#97cba9")
//       : null;
//   });
// };
// changeColor(blue);
// changeColor(green);
// changeColor(pink);

/**
 * --------------------
 * INSTRUCTOR SOLUTION
 * --------------------
 */

/**
 * --------------
 * USING CLOSURE
 * --------------
 */
function changeCol(color) {
  return function () {
    document.body.style.background = color;
  };
}

const bgColorBlue = changeCol("#38598b");
const bgColorPink = changeCol("#f76b8a");
const bgColorGreen = changeCol("#97cba9");

document.querySelector("#blue").addEventListener("click", bgColorBlue);
document.querySelector("#pink").addEventListener("click", bgColorPink);
document.querySelector("#green").addEventListener("click", bgColorGreen)

/**
 * ------------------
 * NOT USING CLOSURE
 * ------------------
 */

//prettier-ignore
// const changeColour = (color) => {document.body.style.background = color};
//prettier-ignore
// document.querySelector("#blue").addEventListener("click", () => changeColour("#38598b"))
// //prettier-ignore
// document.querySelector("#pink").addEventListener("click", () => changeColour("#f76b8a"))
// //prettier-ignore
// document.querySelector("#green").addEventListener("click", () => changeColour("#97cba9"))

/*
  WRITE YOUR SOLUTION HERE
*/

/**
 * ------------------------------
 * MY SOLUTION - FIRST ITERATION
 * ------------------------------
 */
// const locale = () => {
//   let currDate = new Date();
//   return currDate.toLocaleTimeString();
// };

// const intl = () => {
//   let currDate = new Date();
//   return `${currDate.getHours()} : ${currDate.getMinutes()} : ${currDate.getSeconds()}`;
// };

// const clockNode = document.querySelector("#clock");
// setInterval(() => {
//   clockNode.innerHTML = intl();
// }, 1000);

/**
 * -------------------------------
 * MY SOLUTION - SECOND ITERATION
 * -------------------------------
 */
const tickClock = () => {
  const clockNode = document.querySelector("#clock");
  return setInterval(() => {
    let currDate = new Date();
    clockNode.innerHTML = currDate.toLocaleTimeString();
  }, 1000);
};
tickClock();

/**
 * --------------------
 * INSTRUCTOR SOLUTION
 * --------------------
 */

// function clock() {
//   const clockNode = document.querySelector("#clock");
//   return setInterval(() => {
//     let date = new Date();
//     let tick = date.toLocaleTimeString();
//     clockNode.textContent = tick;
//   }, 1000);
// }

// clock();

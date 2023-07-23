/*
  WRITE YOUR SOLUTION HERE
*/

/**
 * ------------
 * MY SOLUTION
 * ------------
 */
const numOfCoffees = [2, 3, 1, 5];
const pperCoffee = 1.25;

const calcCoffee = (array, pperCoffee) => {
  const result = numOfCoffees.reduce(
    (accumulator, element) => accumulator + element
  );
  return `The total bill is ${result * pperCoffee}`;
};

console.log(calcCoffee(numOfCoffees, pperCoffee));

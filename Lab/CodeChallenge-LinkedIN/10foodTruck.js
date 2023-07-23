/*
  WRITE YOUR SOLUTION HERE
*/

/**
 * ------------
 * MY SOLUTION
 * ------------
 */

const vendor = [
  ["Pizza", "Wings", "Fries", "Burgers", "Tacos", "Corndog", "Fried Chicken"],
  ["Pizza", "Salad", "Meatballs", "Chicken Tenders", "Burgers", "Pasta"],
];

const mainMenu = (menu) => {
  // create a new set
  const allDishes = new Set();
  menu.forEach((element) => {
    element.forEach((dish) => {
      allDishes.add(dish);
    });
  });
  return allDishes;
};
const menu = mainMenu(vendor);

const addMenu = (menu) => {
  const combined = document.querySelector("#combined-menu");
  menu.forEach((menu) => {
    const list = document.createElement("li");
    list.innerHTML = menu;
    combined.append(list);
  });
};

addMenu(menu);

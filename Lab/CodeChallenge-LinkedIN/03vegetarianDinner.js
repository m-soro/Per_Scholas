/*
  WRITE YOUR SOLUTION HERE
*/

const menu = [
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
];

/**
 * ------------
 * MY SOLUTION
 * ------------
 */

const vegetarianMenu = (menu) => {
  // Filtered array
  let vegetarian = menu.filter((dish) => dish.isVegetarian);
  //select ul
  const ul = document.querySelector("ul");
  for (let i = 0; i < vegetarian.length; i++) {
    // create a new list bullet every loop
    let listItem = document.createElement("li");
    // set the dish name as the inner html of the list bullet
    listItem.innerHTML = vegetarian[i].name;
    // append the list bullet to ul
    ul.append(listItem);
  }
};

vegetarianMenu(menu);

/**
 * --------------------
 * INSTRUCTOR SOLUTION
 * --------------------
 */

function vegetarianMenu1(menu) {
  const menuNode = document.querySelector("#menu");
  const vegetarianOptions = menu.filter((option) => {
    option.isVegetarian === true;
  });
  vegetarianOptions.forEach((option) => {
    let dish = document.createElement("li");
    dish.textContent = option.name;
    menuNode.appendChild(dish);
  });
}

// vegetarianMenu1(menu);

/*
  WRITE YOUR SOLUTION HERE
*/

// ("How I Got Into Programming!!!") => "how-i-got-into-programming"

/**
 * ------------
 * MY SOLUTION
 * ------------
 */
const myString1 = "How I Got Into Programmings";
const myString2 = "!!!shfyheg    ukfnub3563987597!!!";

const urlLify = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z]+/g, "-")
    .replace(/-$/g, "")
    .replace(/^-/g, "");
};

console.log(urlLify(myString1));

/**
 * --------------------
 * INSTRUCTOR SOLUTION
 * --------------------
 * Doesn't work -_-
 */

function urlify(blogTitle) {
  const punctuation = /[.,/#!$%^&*;:{}=!-_`~()'"]/g;
  const blogTitleWithoutPunctuation = blogTitle.replace(punctuation, "");
  return blogTitleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-");
}

console.log(urlify(myString1));
console.log(urlify(myString2));

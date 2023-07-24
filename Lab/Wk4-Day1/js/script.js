/**
 * -------------------
 * MANIPULATE THE DOM
 * -------------------
 */

const helloDiv = document.querySelector(".hello");
helloDiv.innerHTML = "Hello";

/**
 * -------------------------
 * INNERHTML VS TEXTCONTENT
 * -------------------------
 */
const pEl = document.querySelector(".cool");
console.log(pEl);
// This one actually just changes the text
// pEl.textContent = `"<strong>This is a New Text</strong>" ${2 + 2}`;
// innerHTMl renders html tags
//prettier-ignore
pEl.innerHTML = `This is a <strong>bold</strong> text, This is a JS expression => ${4+4}`;

/**
 * -----------------------------
 * CSS STYLE DECLARATION SYNTAX
 * -----------------------------
 */
pEl.style.color = "purple";
const title = document.querySelector("#title");

console.log(title);

// These two does the same
console.log(title.id);
console.log(title.getAttribute("id"));

// These two does the same
console.log(title.className);
console.log(title.getAttribute("class"));

/**
 * -----------
 * ATTRIBUTES
 * -----------
 */
title.setAttribute("style", "border:solid");
title.setAttribute("class", "example");
// console.log(link.hasAttribute("class"));

const link = document.querySelector("a");
link.setAttribute("href", "https://www.google.com");
console.log(link.getAttribute("href"));

/**
 * -----------------------------------
 * ATTRIBUTES OF AN ELEMENT - CLASSES
 * -----------------------------------
 * <Element>.classList.add(className,className,....)
 * <Element>.classList.remove(className,className,....)
 * <Element>.classList.toggle(className)
 * <Element>.contains(className)
 * <Element>.replace(oldClass, newClass)
 */

const secondP = document.querySelector("p:nth-child(4)");
secondP.classList.add("firstClass", "secondClass", "thirdClass");
secondP.classList.remove("firstClass");
secondP.classList.toggle("fourthClass");
secondP.classList.replace("fourthClass", "brandNewFourthClass");
console.log(secondP.classList);

/**
 * ----------------------------
 * SELECTING MULTIPLE ELEMENTS
 * ----------------------------
 * The preferred is:
 * querrySelectorAll method
 */

const li = document.getElementsByClassName("comment");
console.log(li);
const allP = document.getElementsByTagName("p");
console.log(allP);

const commentELS = document.querySelectorAll(".comment");
console.log(commentELS);

/**
* ------------
* USEFUL INFO
* ------------
* There are three approaches we can use to iterate 
* over the elements in a NodeList :

* A regular forloop - works, but is not as readable or elegant...

* The forEach method. A good option when you want to iterate 
  through all elements and also want to access the index of the iteration.

* A for of loop - elegant and allows early exit of the loop with 
  the breakstatement, however, does not have access to an index (although you could track indexes manually by initializing a separate variable before the loop and incrementing it within the loop).

*/

// For of doesnt have access to index
for (let commentEL of commentELS) {
  commentEL.style.fontSize = "30px";
}

// For of doesnt have access to index
commentELS.forEach((commentEL, index) => {
  console.log(commentEL, index);
});

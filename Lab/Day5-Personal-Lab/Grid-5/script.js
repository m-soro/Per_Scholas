/* GET THE MAIN CONTENT AREA*/
const main = document.querySelector("main");
const h2 = document.querySelector("h2");
h2.innerText = "Layout made with Grid";

/* ADD SPAN TEXT */
const span = document.createElement("span");
span.innerText = `Re-size the window to get height and width of the browser \n Open the console to view the Grid Lay out`;
/* APPENED THE SPAN TO MAIN*/
main.append(span);

/* ADD H1 TITLE*/
const demoName = document.createElement("h2");
demoName.innerText = "Inside Main is FlexBox Demo";
/* APPENED THE TITLE*/
main.append(demoName);

/* CREATE AN IMPUT BOX AND APPEND IT*/
const form = document.createElement("form");
const ul = document.querySelector("ul");

const input = document.createElement("input");
input.setAttribute("id", "div-input");
input.setAttribute("type", "number");

const divInput = document.createElement("p");
ul.append(form);
form.append((divInput.innerText = "how many divs?"));
form.append(input);

const btn = document.createElement("button");
btn.setAttribute("type", "button");
btn.setAttribute("value", "Submit");
btn.innerText = "Submit";
form.append(btn);

btn.addEventListener("click", () => {
  let divsArray = [];

  /* CREATE PARENT DIV*/
  const parentDiv = document.createElement("div");
  /* ADD PARENT DIV CLASS*/
  parentDiv.classList.add("parent-div-flex");
  /* CREATE CHILDREN DIVS */
  const div = document.createElement("div");

  /* GET USER INPUT*/
  let userInput = document.querySelector("#div-input").value;
  console.log(`" You selected : ${userInput} divs"`);
  for (let i = 1; i <= userInput; i++) {
    divsArray.push(div);
  }

  let num = 0;
  const numDivs = divsArray.map((div) => {
    const numDiv = document.createElement("div");
    numDiv.setAttribute("style", `width:${Math.floor(Math.random() * 500)}px`);
    numDiv.innerText = ` ${numDiv.getAttribute("style")} `;
    return numDiv;
  });

  numDivs.forEach((div) => {
    parentDiv.append(div);
    main.append(parentDiv);
  });
});

const width = document.createElement("p");
const height = document.createElement("p");
const text = document.createElement("p");

const media550AndLess = `

/* For Screens that are 550px or less*/

@media (max-width: 550px) {
  body {
    grid-template-rows: auto auto 1fr auto; /* 4 rows */
    grid-template-columns: 10em 1fr; /* 2 columns */
    grid-template-areas:
      " banner banner "
      " nav main "
      " nav main "
      " footer main";
  }
  header {
    background-color: #cadefc;
  }
  nav {
    background-color: #c06c84;
  }
  main {
    background-color: #a75265;
  }
  footer {
    background-color: #f8b400;
  }
}

/* Above Styles For Screens that are 550px or less*/

`;

const media640AndLess = `

THIS IS THE GRID SET UP FOR 40em OR 640PIXELS BELOW 
@media (max-width: 40em) {
    body {
      display: grid;
      grid-template-columns: 0.25fr 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        " banner main"
        " nav main"
        "footer main";
    }
  }
  " ABOVE ^^^ IS THE GRID SET UP FOR 40em OR 640PIXELS BELOW"

`;

const media501AndLess = `

/* FOR SCREENS THAT ARE 501PX OR LESS */
@media (max-width: 501px) {
  body {
    grid-template-rows: auto auto 1fr auto; /* 4 rows */
    grid-template-columns: auto auto;
    grid-template-areas:
      " banner banner "
      " nav nav "
      " main main "
      " footer footer";
  }
  header {
    background-color: #ffe3b0;
  }
  nav {
    background-color: #2e79ba;
  }
  main {
    background-color: #ffbd67;
  }
  footer {
    background-color: #f5e1da;
  }
}

/* ^^^ ABOVE FOR SCREENS THAT ARE 501PX OR LESS */

`;

const mainSetup = `

"THIS IS THE MAIN GRID SET UP"

body {
    background-color: #fdffcd;
    display: grid;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    display: grid;
    min-height: 100vh;
    grid-template-columns: 10em auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      " banner banner "
      " nav main "
      " footer footer";
  }
  header {
    grid-area: banner;
  }
  nav {
    grid-area: nav;
  }
  footer {
    grid-area: footer;
  }
  main {
    grid-area: main;
  }

  "ABOVE IS ^^^ THE MAIN GRID SET UP"
`;

window.onload = () => {
  height.innerText = window.innerHeight;
  width.innerText = window.innerWidth;
};

window.onresize = () => {
  height.innerText = `The height is : ${window.innerHeight}`;
  width.innerText = `The width is : ${window.innerWidth}`;
  main.append(width);
  main.append(height);

  switch (true) {
    case window.innerWidth <= 640 && window.innerWidth > 501:
      console.log(media640AndLess);
      break;
    case window.innerWidth < 501:
      console.log(media501AndLess);
      break;
    case window.innerWidth > 640:
      console.log(mainSetup);
  }
};

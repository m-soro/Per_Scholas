const btn = document.querySelector("button");
const list = document.querySelector(".parent-list");

list.addEventListener("click", (event) => {
  console.log(event.target);
});

btn.addEventListener("click", (event) => {
  //   console.log(`The event => ${event}`);
  //   console.log(`The event target => ${event.target}`);

  // create a new list element
  const li = document.createElement("li");
  //select the input text box
  const inp = document.querySelector("input");
  // get the value from inside the text box
  li.textContent = inp.value;
  // clear the text box
  inp.value = "";
  //append the list element to ul element
  document.querySelector("ul").append(li);
});

/////////////////////////////////////////////////////////////////////
// Kasper's
////////////////////////////////////////////////////////////////////
// const btn = document.querySelector("button");
// const textInput = document.querySelector("input");
// const list = document.querySelector(".list");

// list.addEventListener("click", handleClick);
// function handleClick(e) {
//   e.target.style.backgroundColor = "silver";
// }

// btn.addEventListener("click", function (evt) {
//   const li = document.createElement("li");
//   const userText = textInput.value;
//   li.textContent = userText;
//   textInput.value = "";

//   document.querySelector("ul").appendChild(li);
// });

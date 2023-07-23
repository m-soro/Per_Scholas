/*
  WRITE YOUR SOLUTION HERE
  Linked in learning link
  @link https://www.linkedin.com/learning/javascript-code-challenges/five-friends?autoSkip=true&resume=false&u=87770946
*/

let url = "https://randomuser.me/api/?results=5";

/**
 * ---------------------------------
 * MY SOLUTION, WITHOUT ASYNC/AWAIT
 * ---------------------------------
 */

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     let users = data;
//     let myUsers = users.results;

//     const div = document.querySelector("#timeline");
//     const ul = document.createElement("ul");
//     div.append(ul);

//     for (let key in myUsers) {
//       // get info from JSON object
//       console.log(myUsers[key].name.first, myUsers[key].name.last);
//       console.log(myUsers[key].picture.medium);
//       // create img element and set the src url
//       const img = document.createElement("img");
//       img.setAttribute("src", myUsers[key].picture.medium);
//       ul.append(img);
//       // create li element and input the name
//       const li = document.createElement("li");
//       li.style.listStyleType = "none";
//       li.innerHTML = `${myUsers[key].name.first} ${myUsers[key].name.last}`;
//       ul.append(li);
//     }
//   });

/**
 * -----------------------------
 * MY SOLUTION WITH ASYNC/AWAIT
 * -----------------------------
 * First iteration - Simplified on the second iteration
 */

async function fetchUsersJSON() {
  const response = await fetch(url);
  console.log(response); // => Response {type: 'cors', url: 'https://randomuser.me/api/?results=5', redirected: false, status: 200, ok: true, …}

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  // .JSON() function will transform this => Response {type: 'cors', url: 'https://randomuser.me/api/?results=5', redirected: false, status: 200, ok: true, …}
  // to something we can use
  const users = await response.json();
  return users;
}

fetchUsersJSON().then((users) => {
  // return just user results;
  let myUsers = users.results;
  // console.log(myUsers);

  const div = document.querySelector("#timeline");
  const ul = document.createElement("ul");
  div.append(ul);

  for (let key in myUsers) {
    // get info from JSON object
    // console.log(myUsers[key].name.first, myUsers[key].name.last);
    // console.log(myUsers[key].picture.medium);

    // create img element and set the src url
    const img = document.createElement("img");
    img.setAttribute("src", myUsers[key].picture.medium);
    ul.append(img);
    // create li element and input the name
    const li = document.createElement("li");
    li.style.listStyleType = "none";
    li.innerHTML = `${myUsers[key].name.first} ${myUsers[key].name.last}`;
    ul.append(li);
  }
});

/**
 * ----------------------
 * INSTRUCTOR'S SOLUTION
 * ----------------------
 */

async function getUsers() {
  let people = await fetch(url);
  let data = await people.json();
  const timeLine = document.querySelector("#timeline");
  data.results.forEach((person) => {
    let image = document.createElement("img");
    image.src = person.picture.medium;
    timeLine.appendChild(image);
  });
}

getUsers();

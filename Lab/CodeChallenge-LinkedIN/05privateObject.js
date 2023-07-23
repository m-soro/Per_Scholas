/*
  WRITE YOUR SOLUTION HERE
*/

/**
 * ------------
 * MY SOLUTION
 * ------------
 * It may come up in technical interviews
 */

// Create Symbols
const userName = Symbol("userName");
const passWord = Symbol("passWord");

//prettier-ignore
class User {
  constructor(userName, passWord, age) {
    // Use the Symbols variables as the object keys
    [userName] = userName, 
    [passWord] = passWord,
    this.age = age;
  }
}

// Test with new users
const rachel = new User("rachel.green", "iloveRoss", 32);
const monica = new User("monica.geller", "iloveChandler", 30);

console.log(Object.getOwnPropertyNames(rachel)); // only age will show
console.log(rachel.username); // returns undefined
console.log(rachel.password); // // returns undefined

/**
 * --------------------
 * INSTRUCTOR SOLUTION
 * --------------------
 */

const usrname = Symbol("username");
const passwrd = Symbol("password");

const user = {
  [usrname]: "emmabostian",
  [passwrd]: "1234566",
  age: 27,
};

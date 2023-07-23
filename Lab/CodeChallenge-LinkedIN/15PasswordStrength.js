/*
  WRITE YOUR SOLUTION HERE

- One lowercase letter
- One uppercase letter
- One special character (!@#\$%^&\*)
- One number
- At least 8 characters long
*/

/**
* ------------
* MY SOLUTION
* ------------
* found this in stack overflow
* @link https://stackoverflow.com/questions/1559751/regex-to-make-sure-that-the-string-contains-at-least-one-lower-case-char-upper

*/
const pw1 = "Aa!1mark";
const pw2 = "123mark4";
const pw3 = "#^$^%$)";

const checkPassword = (pw) => {
  return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(pw) && pw.length >= 8
    ? "Your password is valid"
    : "Your password is not valid, try again";
};

console.log("Aa!1mark :", checkPassword(pw1));
console.log("123mark4 :", checkPassword(pw2));
console.log("#^$^%$) :", checkPassword(pw3));

/**
 * --------------------
 * INSTRUCTOR SOLUTION
 * --------------------
 */

function checkPassword(password) {
  let oneLowerCaseLetter = /(?=.+[a-z])/;
  let oneUpperCaseLetter = /(?=.+[A-Z])/;
  let oneDigit = /(?=.+[0-9])/;
  let oneSpecialCharacter = /(?=.+[!@#$%^&*])/;
  let minimumEightCharacters = /(?=.{8,})/;

  let isValid =
    oneLowerCaseLetter.test(password) &&
    oneUpperCaseLetter.test(password) &&
    oneDigit.test(password) &&
    oneSpecialCharacter.test(password) &&
    minimumEightCharacters.test(password);

  return isValid
    ? "Your password is valid"
    : "Your password is invalid, try again";
}

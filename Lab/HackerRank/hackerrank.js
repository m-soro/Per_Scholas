/**
 * CODE CHALLENGE
 * ----------
 * STAIRCASE
 * ----------
 * @link https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
 * Almost got it! - tiny mistake was made
 */
// MY SOLUTION
function staircase(n) {
  let gap = n;
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(gap - i) + "#".repeat(i)); // corrected
    // console.log(" ".repeat((gap -= 1)), "#".repeat(i)); // Where i made a mistake
  }
}
// staircase(6);

// FROM GOOGLE
function stairs(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}
// stairs(6);

/**
 * --------------------
 * DIAGONAL DIFFERENCE
 * --------------------
 * @link https://www.hackerrank.com/challenges/diagonal-difference/problem
 */
let sample = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(array) {
  let pos = array.length;
  let firstDiag = [];
  let secondDiag = [];
  for (let i = 0; i < array.length; i++) {
    firstDiag.push(array[i][i]);
    secondDiag.push(array[i][(pos -= 1)]);
  }
  let firstSum = firstDiag.reduce((acc, ele) => acc + ele);
  let secondSum = secondDiag.reduce((acc, ele) => acc + ele);
  return Math.abs(firstSum - secondSum);
}
// console.log(diagonalDifference(sample));

/**
 * -------------------
 * PLUS MINUS PROBLEM
 * -------------------
 * @link https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
 */
// let sampleNums = [1, 1, 0, -1, -1];
let sampleNums = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  // Write your code here
  let neg = [];
  let pos = [];
  let zero = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i] < 0
      ? neg.push(arr[i])
      : arr[i] > 0
      ? pos.push(arr[i])
      : zero.push(arr[i]);
  }
  console.log((pos.length / arr.length).toPrecision(7));
  console.log((neg.length / arr.length).toPrecision(7));
  console.log((zero.length / arr.length).toPrecision(7));
}

// plusMinus(sampleNums);

/**
 * --------------------
 * HACKERRANK WK4 DAY4
 * --------------------
 * MIN MAX SUM
 * ------------
 * @link https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
 */

let nums = [5, 5, 5, 5, 5];
// let nums = [1, 2, 3, 4, 5];
function miniMaxSum(arr) {
  // Write your code here
  let maxNum = Math.max(...arr);
  let minNum = Math.min(...arr);
  let maxSum = 0;
  let minSum = 0;
  arr.forEach((num) => {
    if (num !== minNum) maxSum += num;
    if (num !== maxNum) minSum += num;
    if (minNum === maxNum) minSum = maxSum = arr[0] * 4;
  });
  console.log(`${minSum} ${maxSum}`);
}
// miniMaxSum(nums);

/**
 * CODE CHALLENGE
 * -----------------
 * BIRTHDAY CANDLES
 * -----------------
 * @link https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
 */

let candles = [3, 2, 1, 3];
function birthdayCakeCandles(candles) {
  // Write your code here
  let tallest = Math.max(...candles);
  let tallestCount = 0;
  candles.forEach((candle) => {
    candle === tallest && (tallestCount += 1);
  });
  return tallestCount;
}

// OR MUCH CONCISELY

// function birthdayCakeCandles(candles) {
//   let filtered = candles.filter((num) => num === Math.max(...candles));
//   return filtered.length;
// }

// console.log(birthdayCakeCandles(candles));

/**
 * -----------------
 * COMPARE TRIPLETS
 * -----------------
 */

a = [1, 3, 3];
b = [3, 2, 1];

function compareTriplets(a, b) {
  let al = 0;
  let bb = 0;
  let score = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      score[0] = al += 1;
    } else if (a[i] < b[i]) {
      score[1] = bb += 1;
    }
  }
  return score;
}
// console.log(compareTriplets(a, b));

/**
 * ----------------
 * TIME CONVERSION
 * ----------------
 * @link https://www.hackerrank.com/challenges/time-conversion/problem?h_r=next-challenge&h_v=zen&isFullScreen=false
 */

// let s = "07:05:45PM"; //19:05:45
// let s = "12:01:00PM"; //12:01:00
// let s = "12:01:00AM"; // 00:01:00
// let s = "12:00:00AM"; // 00:01:00

function timeConversion(s) {
  // Write your code here
  s = s.toLowerCase();
  let flag = s.slice(-2);
  let hour = parseInt(s.slice(0, 2));
  let mins = s.slice(3, 5);
  let secs = s.slice(6, 8);
  let time = "";

  if (flag === "pm") {
    if (hour === 12 && mins <= 59) {
      time = `${hour}:${mins}:${secs}`;
    } else if (hour >= 1) {
      time = `${hour + 12}:${mins}:${secs}`;
    }
  }
  if (flag === "am") {
    if (hour === 12 && mins === "00") {
      time = `0${hour - 12}:${mins}:${secs}`;
    } else if (hour === 12 && mins >= 1) {
      time = `00:${mins}:${secs}`;
    } else if (hour < 10) {
      time = `0${hour}:${mins}:${secs}`;
    } else {
      time = `${hour}:${mins}:${secs}`;
    }
  }
  return time;
}
// console.log(timeConversion(s));

/**
 * -----------------
 * GRADING STUDENTS
 * -----------------
 * @link https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
 */
function gradingStudents(grades) {
  // Write your code here
  let newGrades = [];
  for (let grade of grades) {
    if (grade < 38) {
      newGrades.push(grade);
    } else if ((grade + 2) % 5 === 0) {
      newGrades.push(grade + 2);
    } else if ((grade + 1) % 5 === 0) newGrades.push(grade + 1);
    else newGrades.push(grade);
  }
  return newGrades;
}
// console.log(gradingStudents([73, 67, 38, 10, 90, 5]));

/**
 * -----------------
 * APPLESANDORANGES
 * -----------------
 * @link https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleLands = apples.map((apple) => apple + a);
  let orangeLands = oranges.map((orange) => orange + b);

  let appleLanded = appleLands.filter((apple) => apple <= t && apple >= s);
  let orangeLanded = orangeLands.filter((orange) => orange <= t && orange >= s);

  // console.log(appleLanded.length);
  // console.log(appleLanded.length);
}

/**
 * ------------------
 * NUMBER LINE JUMPS
 * ------------------
 * @link https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true
 * 1/30 cases failed
 */

function kangaroo(x1, v1, x2, v2) {
  let result = "NO";
  let position1 = x1 + v1;
  let position2 = x2 + v2;
  for (let i = 1; i < 100000000; i++) {
    if ((position1 += v1) === (position2 += v2)) {
      result = "YES";
      break;
    }
  }
  return result;
}
// console.log(kangaroo(0, 3, 4, 2)); //
// console.log(kangaroo(0, 2, 5, 3)); //

/**
 * WEEK 5 DAY 3 CODE CHALLENGE
 * ----------------
 * MIGRATORY BIRDS
 * ----------------
 * @link https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true
 */
let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
function migratoryBirds(arr) {
  let obj = {};
  //prettier-ignore
  arr.forEach((element) => (obj[element] = obj[element] ? obj[element] + 1 : 1));
  let max = 0;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (max <= obj[key]) max = obj[key];
    }
  }
  return Object.keys(obj).find((key) => obj[key] === max);
}
// migratoryBirds(arr);

/**
 * ----------------------------------------------------------------
 * ANOTHER WAY TO WRTIE THE OBJECT CREATION PART - MIGRATORY BIRDS
 * ----------------------------------------------------------------
 */
let obj = {};
for (let key of arr) {
  obj[key] = obj[key];
  obj[key] === undefined ? (obj[key] = 1) : (obj[key] += 1);
}

/**
 * ---------------------------
 * RE-WRITTEN USING .FILTER()
 * ---------------------------
 */
function migratoryBirds(arr) {
  let frequency = {};
  arr.forEach((n) => {
    frequency[n] = frequency[n];
    if (frequency[n] in frequency) {
      frequency[n] += 1;
    } else {
      frequency[n] = 1;
    }
  });
  let max = 0;
  for (let n in frequency) {
    if (max <= frequency[n]) max = frequency[n];
  }

  let filtered = Object.keys(frequency).filter((key) => frequency[key] === max);
  return Math.min(...filtered);
}

/**
 * -----------------------------------------------------------------
 * OR USING A MAP OBJECT TO CREATE A FREQUENCY TABLE - NO .FILTER()
 * -----------------------------------------------------------------
 */
function migratoryBirds(arr) {
  let frequencyMap = new Map();
  arr.forEach((val) => frequencyMap.set(val, (frequencyMap.get(val) || 0) + 1));
  let max = Math.max(...frequencyMap.values());
  let result = [];
  frequencyMap.forEach((val, key) => val === max && result.push(key));
  return Math.min(...result);
}

/**
 * ---------------------
 * BREAKING THE RECORDS
 * ---------------------
 * @link https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=false
 */
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
function breakingRecords(scores) {
  let highest = [scores[0]];
  let lowest = [scores[0]];
  scores.forEach((v, i) => {
    if (i !== 0) {
      //prettier-ignore
      highest.push(v >= highest[highest.length-1] ? v : highest[highest.length-1]);
      //prettier-ignore
      lowest.push(v <= lowest[lowest.length-1] ? v : lowest[lowest.length-1]);
    }
  });
  let highestCounter = 0;
  let lowestCounter = 0;
  highest.forEach((v, i) => v > highest[i - 1] && highestCounter++);
  lowest.forEach((v, i) => v < lowest[i - 1] && lowestCounter++);
  return [highestCounter, lowestCounter];
}
console.log(breakingRecords(scores));

/**
 * ------------------
 * SUBARRAY DIVISION
 * ------------------
 * @link https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true
 */

function birthday(s, d, m) {
  let arr = s;
  let sum = d;
  let len = m;
  let count = 0;
  let newArr = [];
  arr.forEach((v, i) => newArr.push(arr.slice(i, i + len)));
  newArr.forEach(
    (segment) => segment.reduce((a, e) => a + e) === sum && count++
  );
  return count;
}
// console.log(birthday([1, 1, 1, 3, 2], 3, 3));

/**
 * WK5 DAY4 CODE CHALLENGE
 * -----------------
 * CATS AND A MOUSE
 * -----------------
 * @link https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true
 */

function catAndMouse(x, y, z) {
  let catA = x;
  let catB = y;
  let mouseC = z;
  let catAPos = 0;
  let catBPos = 0;
  catAPos = Math.abs(catA - mouseC);
  catBPos = Math.abs(catB - mouseC);
  if (catAPos < catBPos) {
    console.log("Cat A");
  } else if (catAPos > catBPos) {
    console.log("Cat B");
  } else catAPos === catBPos;
  console.log("Mouse C");
}

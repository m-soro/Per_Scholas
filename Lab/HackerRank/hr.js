/////////////////////////////////////////////////
/////////// ----------------------    //////////
//////////  HACKERRANK SCRATCH PAD   //////////
/////////   ----------------------  //////////
/////////////////////////////////////////////

function pageCount(n, p) {
  // Write your code here
  let pagesLong = n;
  let targetPage = p;
  let arrayPairs = [];
  let bookPagesPairs = [];
  let flip = 0;

  for (let i = 0; i <= n; i++) {
    if (i !== 1) {
      arrayPairs.push([i - 1, i]);
    }
  }
  arrayPairs = arrayPairs.slice(1);

  for (let i = 0; i < arrayPairs.length; i++) {
    if (i % 2 != 0) {
      bookPagesPairs.push(arrayPairs[i]);
    }
  }
  // console.log(bookPagesPairs);

  bookPagesPairs.forEach((pagePair) => {
    if (pagePair.includes(targetPage)) {
      console.log("yes");
    }
  });
}

console.log(pageCount(5, 4));

//////////////////

// Working Solution
function sockMerchant(n, ar) {
  // Write your code here
  let sockTable = {};
  let match = 0;
  // create frequency table
  for (let key of ar) {
    sockTable[key] = sockTable[key];
    sockTable[key] === undefined ? (sockTable[key] = 1) : (sockTable[key] += 1);
  }
  // iterate on frequency table
  for (let prop in sockTable) {
    if (sockTable[prop] % 2 === 0) {
      match += sockTable[prop] / 2;
    } else if (sockTable[prop] > 2 && sockTable[prop] % 2 !== 0) {
      match += Math.floor(sockTable[prop] / 2);
    }
  }
  return match;
}

// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

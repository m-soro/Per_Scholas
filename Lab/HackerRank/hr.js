/////////////////////////////////////////////////
/////////// ----------------------    //////////
//////////  HACKERRANK SCRATCH PAD   //////////
/////////   ----------------------  //////////
/////////////////////////////////////////////

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let lengthOfArray = n;
  let divisor = k;
  let array = ar;
  let newArr = [];

  array.forEach((value, index) => {
    array.filter((va) => {
      if ((value + va) % divisor === 0) {
        if (value < va) {
          console.log("VALUE:", value, "VA:", va);
          newArr.push([value, va]);
        }
      }
    });
  });
  return newArr.length;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));

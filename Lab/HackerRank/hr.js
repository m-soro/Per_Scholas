/////////////////////////////////////////////////
/////////// ----------------------    //////////
//////////  HACKERRANK SCRATCH PAD   //////////
/////////   ----------------------  //////////
/////////////////////////////////////////////
let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
function migratoryBirds(arr) {
  let newMap = new Map();
  arr.forEach((val) => newMap.set(val, (newMap.get(val) || 0) + 1));
  let max = Math.max(...newMap.values());
  let result = [];
  newMap.forEach((val, key) => val === max && result.push(key));
  return Math.min(...result);
}

console.log(migratoryBirds(arr));

/////////////////////////////////////////////////
/////////// ----------------------    //////////
//////////  HACKERRANK SCRATCH PAD   //////////
/////////   ----------------------  //////////
/////////////////////////////////////////////
function dayOfProgrammer(yr) {
  let isLeapYear = false;
  let firstEight = 243;
  let targetDay = 256;
  let result = 0;
  let isJulian = false;
  let isGregorian = false;

  if (yr >= 1917) {
    isJulian = true;
  } else {
    isGregorian = true;
  }

  if (yr === 1918) {
    firstEight = 211;
  }
  if (isGregorian) {
    if (yr % 4 === 0) {
      isLeapYear = true;
      if (isLeapYear) firstEight += 1;
      result = targetDay - firstEight;
      return `${result}.09.${yr}`;
    } else if (yr % 400 === 0 || (yr % 4 === 0 && !yr % 100 === 0)) {
      isLeapYear = true;
      if (isLeapYear) firstEight += 1;
      result = targetDay - firstEight;
      return `${result}.09.${yr}`;
    }
  }
}

let yr = 1800;

console.log(dayOfProgrammer(yr));

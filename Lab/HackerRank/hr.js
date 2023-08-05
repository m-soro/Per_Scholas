/////////////////////////////////////////////////
/////////// ----------------------    //////////
//////////  HACKERRANK SCRATCH PAD   //////////
/////////   ----------------------  //////////
/////////////////////////////////////////////
// Complete the catAndMouse function below.

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
console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));

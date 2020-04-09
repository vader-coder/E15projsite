/*
This script will tell you how many times you pressed the button
*/
var letters = document.getElementById("letters");
var count = 0;
function checkAddress(fieldId) {
  count = count + 1;
  if (count == 1) {
    letters.innerHTML = "You pressed the button ".concat(count.toString().concat(" time ."));
  }
  else {
    letters.innerHTML = "You pressed the button ".concat(count.toString().concat(" times ."));
  }
}

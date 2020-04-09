var letters = document.getElementById("letters");
var count = 0;
function checkAddress(fieldId) {
    if (count == 0) {
      letters.innerHTML = " Letters have been changed. ";
      count = 1;
    }
    else {
      letters.innerHTML = " These are some letters. ";
      count = 0;
    }
}

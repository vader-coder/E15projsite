/*This will be an attempt to attain the goal of script3.js,
that is a more intelligent computer, one step at a time instead of all at once.
*/

/*
This is our tic tac toe code.
*/
var letters = document.getElementById("letters");
/*board button ids "S#"
0 1 2
3 4 5
6 7 8
*/
var boardState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var computerWon = false;
//use board[0]-board[8] to represent states of A1, A2, A3, B1, B2, B3, B4.
//zero represents empty here. 'O' represents occupied by computer, 'X' represents occupied by human.
function winner() {
  //if statements check all the possible ways that a computer or a human can possibly win.
  if ((boardState[0]=="X" && boardState[4]=="X" && boardState[8]=="X") ||
      (boardState[2]=="X" && boardState[4]=="X" && boardState[6]=="X") ||
      (boardState[0]=="X" && boardState[3]=="X" && boardState[6]=="X") ||
      (boardState[1]=="X" && boardState[4]=="X" && boardState[7]=="X") ||
      (boardState[2]=="X" && boardState[5]=="X" && boardState[8]=="X") ||
      (boardState[6]=="X" && boardState[7]=="X" && boardState[8]=="X") ||
      (boardState[3]=="X" && boardState[4]=="X" && boardState[5]=="X") ||
      (boardState[0]=="X" && boardState[1]=="X" && boardState[2]=="X")) {
    return "player";
  }
  if ((boardState[0]=="O" && boardState[4]=="O" && boardState[8]=="O") ||
      (boardState[2]=="O" && boardState[4]=="O" && boardState[6]=="O") ||
      (boardState[0]=="O" && boardState[3]=="O" && boardState[6]=="O") ||
      (boardState[1]=="O" && boardState[4]=="O" && boardState[7]=="O") ||
      (boardState[2]=="O" && boardState[5]=="O" && boardState[8]=="O") ||
      (boardState[6]=="O" && boardState[7]=="O" && boardState[8]=="O") ||
      (boardState[3]=="O" && boardState[4]=="O" && boardState[5]=="O") ||
      (boardState[0]=="O" && boardState[1]=="O" && boardState[2]=="O")) {
    computerWon = true;
    return "computer";
  }
}
function check_corners() {
  //checks if any of the corners are empty, if they are then they are filled.
  //if one is empty, select a random one.
  let corners = [0, 2, 6, 8];//indexes from 0 to 3.
  let empty_corners = [];
  //make the computer choose a number that is 0, 2, 6, or 8.
  for (let k = 0; k < 4; k++) {
    if (boardState[corners[k]] == 0) {//if board empty at corners[k], add to empty_corners.
      empty_corners.push(corners[k]);
    }
  }
  let num = Math.floor((Math.random() * (empty_corners.length)));//random number for index of empty_corneers.
  boardState[empty_corners[num]] = "O";
  console.log("Computer has selected corner S".concat(empty_corners[num].toString()));
  return empty_corners[num];
}
function check_sides() {
  let sides = [1, 3, 5, 7];
  let empty_sides = [];
  for (let j = 0; j < 4; j++) {//adds all the empty ones to empty_sides. test this later.
    if (boardState[sides[j]] == 0) {
      empty_sides.push(sides[j]);
    }
  }
  let num2 = Math.floor((Math.random() * (empty_sides.length)));
  boardState[empty_sides[num2]] = "O";
  console.log("Computer has selected corner S".concat(empty_sides[num2].toString()));
  return empty_sides[num2];
}
function player_move(elementID) {
  console.log("latest update received.");
  //This function executes every time a player makes a move.
  var player_clicked = parseInt(elementID.charAt(1)); //space # that the player clicked on the board.
  if (boardState[player_clicked] == 0) {
    //if the spot on the board is empty, continue & eventually allow the player to move there.
    boardState[player_clicked] = "X";
    console.log("player move added to boardState");
    var computer_move = "none";//default
    if ((boardState[0] != 0) && (boardState[2] != 0) && (boardState[6] != 0) && (boardState[8] != 0)) {
      console.log("All the corners are full");
      if (boardState[4] == 0) {//if the center is empty & the corners are full, take the center.
        boardState[4] = "O";
        computer_move = 4;
        console.log("Computer has selected center.");
      }
      else {
        if ((boardState[1] != 0) && (boardState[3] != 0) && (boardState[5] != 0) && (boardState[7] != 0)) {//if all sides are filled
          for (let i = 0; i <= boardState.length; i++) {
            if (i >= boardState.length) {
              computer_move = "none";
              console.log("no computer move available.");
            }//9 tic-tac-toe blanks, so player will make last move. will be no computer move.
            if (boardState[i] == 0) {
              boardState[i] = "O";
              computer_move = i;
              console.log("found a computer move by flipping through boardState & selecting the first open space.");
              break;
            //goes through boardState, assigns O to first one that isn't taken. This is the "dumb" algorithm.
            }
          }
        }
        else {//if the corners & center are filled but at least one of the sides isn't
          computer_move = check_sides();
          console.log("check_sides assigned to computer_move");
        }
      }
    }
    else {//if one of the corners is available.
      computer_move = check_corners();//check_corners will return a random number from among the corners.
      console.log("check_corners() assigned to computer_move");
    }
    document.getElementById(elementID).innerHTML = "X";
    console.log("player move should be displayed");
    if (computer_move != "none") {
      var computer_move_ID = "S".concat(computer_move.toString());
      document.getElementById(computer_move_ID).innerHTML = "O";
      console.log("computer move should be displayed.");
    }
    //concatenates "S" and the string version of the index of the computer move & assigns it to a variable.
    //display player move & computer move on the html page.
    if ((winner()=="player") && (computerWon == false)) {
      document.getElementById("victory").innerHTML = "Congratulations, you won!";
    }
    if (winner()=="computer") {
      document.getElementById("victory").innerHTML = "The computer won. Better luck next time!";
    }
  }
  else {
    alert("This space is already full.");
  }
}

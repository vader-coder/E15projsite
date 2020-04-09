/*script3_1.js, the computer will check for corners, then the center, then the sides. Here I want to enable it to check if the opponet is going to win next.
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
var playerWon = false;
//use board[0]-board[8] to represent states of A1, A2, A3, B1, B2, B3, B4.
//zero represents empty here. "O" represents occupied by computer, "X" represents occupied by human.
var potMoves = [];
//This will store all the places that computer_move suggesets we should move to.
//this is to account for the fact that there might be cases where we have already blocked the user & we want to block him again.
//so we really only care about the most recent move. how to check if most recent move next to an adjacent one?
//check if boardState[i] is 0 or not w/ i being each of the items in potMoves. we only want to move to the one that is empty.
function winning(le) {
  //this sequence checks if either member is about to win, and returns the chracter to stop them.
  //winning("X") adds a character to stop the player, winning("O") adds the space where the computer should go if it wants to win.
  if ((boardState[0]==le && boardState[4]==le)) { potMoves.push(8); }
  if ((boardState[0]==le && boardState[8]==le)) { potMoves.push(4); }
  if ((boardState[4]==le && boardState[8]==le)) { potMoves.push(0); }

  if ((boardState[2]==le && boardState[4]==le)) { potMoves.push(6); }
  if ((boardState[2]==le && boardState[6]==le)) { potMoves.push(4); }
  if ((boardState[4]==le && boardState[6]==le)) { potMoves.push(2); }
  //columns
  if ((boardState[0]==le && boardState[3]==le)) { potMoves.push(6); }
  if ((boardState[0]==le && boardState[6]==le)) { potMoves.push(3); }
  if ((boardState[3]==le && boardState[6]==le)) { potMoves.push(0); }

  if ((boardState[1]==le && boardState[4]==le)) { potMoves.push(7); }
  if ((boardState[1]==le && boardState[7]==le)) { potMoves.push(4); }
  if ((boardState[4]==le && boardState[7]==le)) { potMoves.push(1); }

  if ((boardState[2]==le && boardState[5]==le)) { potMoves.push(8); }
  if ((boardState[2]==le && boardState[8]==le)) { potMoves.push(5); }
  if ((boardState[5]==le && boardState[8]==le)) { potMoves.push(2); }
  //rows
  if ((boardState[6]==le && boardState[7]==le)) { potMoves.push(8); }
  if ((boardState[6]==le && boardState[8]==le)) { potMoves.push(7); }
  if ((boardState[7]==le && boardState[8]==le)) { potMoves.push(6); }

  if ((boardState[3]==le && boardState[4]==le)) { potMoves.push(5); }
  if ((boardState[3]==le && boardState[5]==le)) { potMoves.push(4); }
  if ((boardState[4]==le && boardState[5]==le)) { potMoves.push(3); }

  if ((boardState[0]==le && boardState[1]==le)) { potMoves.push(2); }
  if ((boardState[0]==le && boardState[2]==le)) { potMoves.push(1); }
  if ((boardState[1]==le && boardState[2]==le)) { potMoves.push(0); }
}
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
  console.log("Computer has selected side S".concat(empty_sides[num2].toString()));
  return empty_sides[num2];
}
var computer_move = "none";//default
//add an extra button that decides whether the computer or user goes first.
function which_first() {
  /*This function is called whenever the body is loaded. The code will decide randomly whether the user or the computer goes first.
  */
  let num3 = Math.floor(Math.random() * 2)//returns a 1 or a 0.
  if (num3 == 0) {
    document.getElementById("firstMove").innerHTML = "You get to move first this game.";
  }
  else if (num3 == 1) {
    computer_move = check_corners();//check_corners will return a random number from among the corners.
    console.log("check_corners() assigned to computer_move");
    boardState[computer_move] = "O";
    let computer_move_ID = "S".concat(computer_move.toString());
    document.getElementById(computer_move_ID).innerHTML = "O";
    console.log("computer move should be displayed.");
    document.getElementById("firstMove").innerHTML = "The computer gets to move first this game.";
  }
}//use what first is to determine who goes first.
function player_move(elementID) {
  document.getElementById("firstMove").innerHTML = "";//clears the message about who goes first.
  console.log("This is script4.js. text line 2.");
  //This function executes every time a player makes a move.
  var player_clicked = parseInt(elementID.charAt(1)); //space # that the player clicked on the board.
  if (boardState[player_clicked] == 0) {
    //if the spot on the board is empty, continue & eventually allow the player to move there.
    boardState[player_clicked] = "X";
    console.log("player move added to boardState");
    computer_move = "none";
    winning("O");//puts in potMoves all the moves between two Os.
    for (let g = 0; g < potMoves.length; g++) {
      if (boardState[potMoves[g]] == 0) {
        boardState[potMoves[g]] = "O";
        computer_move = potMoves[g];
        let partOne = "Computer has selected S".concat(computer_move.toString());
        console.log(partOne.concat(" to win the game."));
        potMoves = [];//redefine it as an empty array, so we don't have to store the results from the previous check.
        break;//once we find a move in potMoves where g = 0, we want to move there. maybe we want to do potWins? have it be a dictionary instead.
        //if the user has a spot where they could win, & the computer has a spot where it could win, we want the computer to pick the spot where it could win.
      }
    }
    if (computer_move == "none") {
      winning("X");//puts in potMoves all the moves between two Xs.
      for (let h = 0; h < potMoves.length; h++) {
        if (boardState[potMoves[h]] == 0) {
          boardState[potMoves[h]] = "O";
          computer_move = potMoves[h];
          let partOne = "Computer has selected S".concat(computer_move.toString());
          console.log(partOne.concat(" to block the player from winning."));
          potMoves = [];//redefine it as an empty array, so we don't have to store the results from the previous check.
          break;//once we find a move in potMoves where h = 0, we want to move there.
        }
      }
    }
    if (((boardState[0] == 0) || (boardState[2] == 0) || (boardState[6] == 0) || (boardState[8] == 0)) && (computer_move == "none")) {
      //check if a corner is empty & computer hasn't gone yet.
      computer_move = check_corners();//check_corners will return a random number from among the corners.
      console.log("check_corners() assigned to computer_move");
    }
    else if (computer_move == "none") {  //if all corners are full & computer hasn't moved.
      console.log("All the corners are full");
      if (boardState[4] == 0) {//if the center is empty & the corners are full, take the center.
        boardState[4] = "O";
        computer_move = 4;
        console.log("Computer has selected center.");
      }
      else {//if the center & corners are full, choose a side.
        if ((boardState[1] == 0) || (boardState[3] == 0) || (boardState[5] == 0) || (boardState[7] == 0)) {
          //if at least one side is empty, pick one of them.
          computer_move = check_sides();
          console.log("check_sides assigned to computer_move");
        }
        else {
          console.log("no computer move available.");
          //if corners, sides, and center taken, then the computer has no move.
        }
      }
    }
    document.getElementById(elementID).innerHTML = "X";
    console.log("player move should be displayed");
    if (computer_move != "none") {
      let computer_move_ID = "S".concat(computer_move.toString());
      document.getElementById(computer_move_ID).innerHTML = "O";
      console.log("computer move should be displayed.");
    }
    //concatenates "S" and the string version of the index of the computer move & assigns it to a variable.
    //display player move & computer move on the html page.
    if ((winner()=="player") && (computerWon == false)) {
      document.getElementById("victory").innerHTML = "Congratulations, you won!";
      playerWon = true;
    }
    if ((winner()=="computer") && (playerWon == false)) {
      document.getElementById("victory").innerHTML = "The computer won. Better luck next time!";
    }
  }
  else {
    document.getElementById("firstMove").innerHTML = "This space is already full.";//in case the user disabled alerts or something.
    alert("This space is already full.");
  }
}

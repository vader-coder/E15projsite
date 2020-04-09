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
function player_move(elementID) {
  //This function executes every time a player makes a move.
  var player_clicked = parseInt(elementID.charAt(1)); //space # that the player clicked on the board.
  if (boardState[player_clicked] == 0) {
    //if the spot on the board is empty, continue & eventually allow the player to move there.
    boardState[player_clicked] = "X";
    for (let i = 0; i <= boardState.length; i++) {
      if (i >= boardState.length) {
        var computer_move = "none";
      }//9 tic-tac-toe blanks, so player will make last move. will be no computer move.
      if (boardState[i] == 0) {
        boardState[i] = "O";
        var computer_move = i;
        break;
        //goes through boardState, assigns O to first one that isn't taken. This is the "dumb" algorithm.
      }
    }
    document.getElementById(elementID).innerHTML = "X";
    if (computer_move != "none") {
      var computer_move_ID = "S".concat(computer_move.toString());
      document.getElementById(computer_move_ID).innerHTML = "O";
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

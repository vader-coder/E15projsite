/*
This is our tic tac toe code.
This is an improvement over the script2.js version because gives the computer a real
decision process for selecting its move.
*/
var letters = document.getElementById("letters");
/*board button ids "S#"
0 1 2
3 4 5
6 7 8
*/
var boardState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var computerWon = false;
var computerMove = "none";
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
potMoves = [];
//This will store all the places that computer_move suggesets we should move to.
//this is to account for the fact that there might be cases where we have already blocked the user & we want to block him again.
//so we really only care about the most recent move. how to check if most recent move next to an adjacent one?
//check if boardState[i] is 0 or not w/ i being each of the items in potMoves. we only want to move to the one that is empty.
function winning(le) {
  //this sequence checks if either member is about to win, and returns the chracter to stop them.
  //diagonal
  if ((boardState[0]==le && boardState[4]==le)) { potMoves.push(8); }/*
This is our tic tac toe code.
This is an improvement over the script2.js version because gives the computer a real
decision process for selecting its move.
*/
var letters = document.getElementById("letters");
/*board button ids "S#"
0 1 2
3 4 5
6 7 8
*/
var boardState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var computerWon = false;
var computer_move = "none";
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
potMoves = [];
//This will store all the places that computer_move suggesets we should move to.
//this is to account for the fact that there might be cases where we have already blocked the user & we want to block him again.
//so we really only care about the most recent move. how to check if most recent move next to an adjacent one?
//check if boardState[i] is 0 or not w/ i being each of the items in potMoves. we only want to move to the one that is empty.
function winning(le) {
  //this sequence checks if either member is about to win, and returns the chracter to stop them.
  //diagonal
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
function check_corners() {
  //checks if any of the corners are empty, if they are then they are filled.
  let found = true;
  //make the computer choose a number that is 0, 2, 6, or 3.
  while (found) {
    let num = Math.floor((Math.random() * 5));//random number from 0 to 4 multiplied by 2.
    if (num == 0 || num == 2 || num == 6 || num == 8) {
      if (boardState[num] == 0) {
        boardState[num] = 'O';
        computer_move = num;
        found = false;//break loop.
      }
    }
  }
}
function check_sides() {
//checks if any of the sides are empty, if so they they will be filled.
  let found = true;
  //make the computer choose a number that is 0, 2, 6, or 3.
  while (found) {
    let num = Math.floor((Math.random() * 8));//random number from 0 to 7.
    if (num == 1 || num == 3 || num == 5 || num == 7) {
      if (boardState[num] == 0) {
        boardState[num] = 'O';
        computer_move = num;
        found = false;//break loop.
      }
    }
  }
}
function player_move(elementID) {
  //This function executes every time a player makes a move.
  var player_clicked = parseInt(elementID.charAt(1)); //space # that the player clicked on the board.
  if (boardState[player_clicked] == 0) {
    //if the spot on the board is empty, continue & eventually allow the player to move there.
    boardState[player_clicked] = "X";
    winning('O');//adds moves we can go to win to potMoves[];
    for (let i = 0; i < potMoves.length; i++) {
      if (boardState[potMoves[i]] == 0) {//if the index you should move to is empty
        boardState[potMoves[i]] = 'O';
        computer_move = potMoves[i];//was just i before.
        break;//should only be one.
      }
    }
    if (computer_move == "none") {//computer hasn't decided on a move.
      winning('X');//adds moves we can use to block player.
      for (let i = 0; i < potMoves.length; i++) {
        if (boardState[potMoves[i]] == 0) {//if the index you should move to is empty
          boardState[potMoves[i]] = 'O';
          computer_move = potMoves[i];//was just i before.
          break;//should only be one.
        }
      }
      if (computer_move == "none") {
        //move on corner.
        check_corners();
        if (computer_move == "none") {
          if (boardState[4] == 0) {
            boardState[4] = 'O';
            computer_move = 4;
          }
          else if (computer_move == "none") {
            check_sides();
          }
        }
      }
    }
    if (computer_move != "none") {
      var computer_move_ID = "S".concat(computer_move.toString());
    }
    //concatenates "S" and the string version of the index of the computer move & assigns it to a variable.
    //display player move & computer move on the html page.
    document.getElementById(elementID).innerHTML = "X";
    if (computer_move != "none") {
      document.getElementById(computer_move_ID).innerHTML = "O";
    }
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
function check_corners() {
  //checks if any of the corners are empty, if they are then they are filled.
  let found = true;
  //make the computer choose a number that is 0, 2, 6, or 3.
  while (found) {
    let num = Math.floor((Math.random() * 5));//random number from 0 to 4 multiplied by 2.
    if (num == 0 || num == 2 || num == 6 || num == 8) {
      if (boardState[num] == 0) {
        boardState[num] = 'O';
        computer_move = num;
        found = false;//break loop.
      }
    }
  }
}
function check_sides() {
//checks if any of the sides are empty, if so they they will be filled.
  let found = true;
  //make the computer choose a number that is 0, 2, 6, or 3.
  while (found) {
    let num = Math.floor((Math.random() * 8));//random number from 0 to 7.
    if (num == 1 || num == 3 || num == 5 || num == 7) {
      if (boardState[num] == 0) {
        boardState[num] = 'O';
        computer_move = num;
        found = false;//break loop.
      }
    }
  }
}
function player_move(elementID) {
  //This function executes every time a player makes a move.
  var player_clicked = parseInt(elementID.charAt(1)); //space # that the player clicked on the board.
  if (boardState[player_clicked] == 0) {
    //if the spot on the board is empty, continue & eventually allow the player to move there.
    boardState[player_clicked] = "X";
    winning('O');//adds moves we can go to win to potMoves[];
    for (let i = 0; i < potMoves.length; i++) {
      if (boardState[potMoves[i]] == 0) {//if the index you should move to is empty
        boardState[potMoves[i]] = 'O';
        var computer_move = i;
        break;//should only be one.
      }
    }
    if (computer_move == "none") {//computer hasn't decided on a move.
      winning('X');//adds moves we can use to block player.
      for (let i = 0; i < potMoves.length; i++) {
        if (boardState[potMoves[i]] == 0) {//if the index you should move to is empty
          boardState[potMoves[i]] = 'O';
          computer_move = i;
          break;//should only be one.
        }
      }
      if (computer_move == "none") {
        //move on corner.
        check_corners();
        if (computer_move == "none") {
          if (boardState[4] == 0) {
            boardState[4] = 'O';
            computer_move = 4;
          }
          else if (computer_move == "none") {
            check_sides();
          }
        }
      }
    }
    if (computer_move != "none") {
      var computer_move_ID = "S".concat(computer_move.toString());
    }
    //concatenates "S" and the string version of the index of the computer move & assigns it to a variable.
    //display player move & computer move on the html page.
    document.getElementById(elementID).innerHTML = "X";
    if (computer_move != "none") {
      document.getElementById(computer_move_ID).innerHTML = "O";
    }
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

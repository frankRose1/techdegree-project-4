//GENERAL VARAIBLES start
const $gameBoard = $('#board');
//player 1 is O player 2 is X
const $player1 = $('#player1');
const $player2 = $('#player2');
const $boxes = $('li.box');
let placeholder = 'O';
startGame();

//this is the newMove function
$boxes.on('click', (e) =>{
  if (e.target.innerText == "") {
    e.target.innerText = placeholder;
    disableBox(e);
    nextTurn();//call the nextTurn to change the contents of placeholder
  }
});

function startGame() {
  let placeholder = "O";
  currentPlayer();
}

//this function will keep track of whose turn it is and toggle the active class
function nextTurn() {
  if ( checkWinner(placeholder) == true ) {
    alert(`${placeholder} has won`);
  } else if(placeholder == "O") {
    placeholder = "X";
    $player1.removeClass('active');
    $player2.addClass('active');
  } else {
      placeholder = "O";
      $player1.addClass('active');
      $player2.removeClass('active');
  }
}

function currentPlayer() {
  $player1.addClass('active');
}

//this is called in the click event and is evaluated before the nextTurn is called
// as nextTurn will change the contents of placeholder
function disableBox(e) {
  //add the disabled class based on what is inside placeholder
    if (placeholder == "O") {
      $(e.target).addClass('box-filled-1');
    } else if (placeholder == "X") {
      $(e.target).addClass('box-filled-2');
    }
}

// WIN CONDITIONS START

//here we will check each row to see if it returns true
//if checkRow function returns true then we set the winner of the game to be true
function checkWinner(move){
  let winnerResult = false;
  if( checkRow(0, 1, 2, move) ||
      checkRow(3, 4, 5, move) ||
      checkRow(6, 7, 8, move) ||
      checkRow(0, 3, 6, move) ||
      checkRow(1, 4, 7, move) ||
      checkRow(2, 5, 8, move) ||
      checkRow(0, 4, 8, move) ||
      checkRow(2, 4, 6, move) ) {
        winnerResult = true
  }
  return winnerResult;
}

//this function will check the individual rows and return a boolean
//the params are the indexes that we pass in to the getBoxFunction
//move is going to be the value of parameter
function checkRow(a, b, c, move) {
    let rowResult = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move ) {
      rowResult = true
    }
    return rowResult;
}

//this will retrieve the individual box based on the index value we pass in
function getBox(index) {
  return $boxes[index].innerText;
}
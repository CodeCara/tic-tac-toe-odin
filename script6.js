//Gameboard Factory Function IIFE
let gameboard = function (){
    let board = new Array(9);
    for (let i= 0; i < board.length ; i++)
        {board[i]=i;} 
    let newboard = [...board];
    let currentPlayerChoice;
    
    console.log(board);
    //Board is being reset correctly (tested)
    let resetBoard = function (){
        board = [...newboard];
    };

    let gameboardFull = function (board) {
        console.log(board);
        //how to shorten the if statement?
     if (board.includes(0) ||
        board.includes(1) ||
        board.includes(2) ||
        board.includes(3) ||
        board.includes(4) ||
        board.includes(5) ||
        board.includes(6) ||
        board.includes(7) ||
        board.includes(8)
    )
        {console.log('true');}
     else {console.log('false');}


    };


  return {board, newboard, gameboardFull};
  

} ();

gameboard.gameboardFull(gameboard.board);
console.log({gameboard});


//createPlayerObject Factory Function
let createPlayerObject = function(name)
{
name = name;
let score = 0;
let currentPlayer=false;

return {name, score, currentPlayer}

};

console.log();
//playGame Factory Function
let playGame = function () {
    let playerOneChoice;
    let playerTwoChoice;
    let player1 = prompt(`Player 1, please enter your name`);
    let player2 = prompt(`Player 2, please enter your name`);
let playerOneObject = createPlayerObject(player1);
let playerTwoObject = createPlayerObject(player2);
let currentPlayer = player1;
let gameOver=false;

let setPlayerChoiceOnBoard = function () {
    while (gameOver===false)
        {
    playerOneChoice = prompt(`${player1} please select a number between 0 and 8`);
    playerTwoChoice = prompt(`${player2} please select a number between 0 and 8`);

    {if (currentPlayer===player1)
    {gameboard.board[playerOneChoice]='X'}
    else if (currentPlayer===player2)
        {gameboard.board[playerTwoChoice]='0'}
    console.log(gameboard.board);}

   
   
};
setPlayerChoiceOnBoard();
// const printBoard = () => {
//     const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
//     console.log(boardWithCellValues);
//   };
//   printBoard();





   
}
return {playerOneObject, playerTwoObject, currentPlayer}
    // let getActivePlayer = () => getActivePlayer;
//switch player



}

playGame();
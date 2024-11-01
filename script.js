
//Gameboard Factory Function IIFE
let gameboard = function (){
    let board = [" ", " ", " ",
    " ", " ", " ",
    " ", " ", " "]
    
    let newboard = [...board];
let currentPlayer;

    let squareClicked;
    
    
    console.log(board);
    let resetBoardAndGame = function (){
        board = [...newboard];
        gameboard.board=board;
        displayController.square0.innerText=gameboard.board[0];
        displayController.square1.innerText=gameboard.board[1];
        displayController.square2.innerText=gameboard.board[2];
        displayController.square3.innerText=gameboard.board[3];
        displayController.square4.innerText=gameboard.board[4];
        displayController.square5.innerText=gameboard.board[5];
        displayController.square6.innerText=gameboard.board[6];
        displayController.square7.innerText=gameboard.board[7];
        displayController.square8.innerText=gameboard.board[8]; 
        displayController.messageBox.style.display='none';
        displayController.boardPlusReset.style.display='none';
        displayController.playerNamesContainer.style.display='block';
        displayController.playerOneName.value=' ';
        displayController.playerTwoName.value=' ';
        displayController.playerOneName.style.backgroundColor='white';
        displayController.playerTwoName.style.backgroundColor='white';


        return board;
    };


    let gameboardFull = function (board) {
     if (gameboard.board.includes(' '))
    
        {return false;}
     else {return true;}
    };


  return {board, gameboardFull, resetBoardAndGame, squareClicked, currentPlayer};
  

} ();




let createPlayerObject = function(playerName) {
   
    const name = playerName; 
  //Should value below be left as null?
   const currentPlayerChoice = null;
        return {name, currentPlayerChoice}
    }


let playGame = function () {
    let gameOver = false;
   
    //Logic for Player One win
    if ((gameboard.board[0]==='X' && gameboard.board[1]==='X' && gameboard.board[2]==='X') ||
    (gameboard.board[3]==='X' && gameboard.board[4]==='X' && gameboard.board[5]==='X') ||
    (gameboard.board[6]==='X' && gameboard.board[7]==='X' && gameboard.board[8]==='X') ||   
    (gameboard.board[0]==='X' && gameboard.board[3]==='X' && gameboard.board[6]==='X') ||
    (gameboard.board[1]==='X' && gameboard.board[4]==='X' && gameboard.board[7]==='X') ||
    (gameboard.board[2]==='X' && gameboard.board[5]==='X' && gameboard.board[8]==='X') ||
    (gameboard.board[0]==='X' && gameboard.board[4]==='X' && gameboard.board[8]==='X') ||
    (gameboard.board[6]==='X' && gameboard.board[4]==='X' && gameboard.board[2]==='X'))
    {
        displayController.messageBox.innerText=`${displayController.firstPlayerObject.name} wins!  Click anywhere to continue`;
        displayController.messageBox.style.display='flex';
        displayController.firstPlayerObject.playerWins = true;
        gameOver=true;
        
    }

    //Logic for Player Two win
    else if ((gameboard.board[0]==='0' && gameboard.board[1]==='0'&& gameboard.board[2]==='0') ||
    (gameboard.board[3]==='0' && gameboard.board[4]==='0' && gameboard.board[5]==='0') ||
    (gameboard.board[6]==='0' && gameboard.board[7]==='0' && gameboard.board[8]==='0') ||   
    (gameboard.board[0]==='0' && gameboard.board[3]==='0' && gameboard.board[6]==='0') ||
    (gameboard.board[1]==='0' && gameboard.board[4]==='0' && gameboard.board[7]==='0') ||
    (gameboard.board[2]==='0' && gameboard.board[5]==='0' && gameboard.board[8]==='0') ||
    (gameboard.board[0]==='0' && gameboard.board[4]==='0' && gameboard.board[8]==='0') ||
    (gameboard.board[6]==='0' && gameboard.board[4]==='0' && gameboard.board[2]==='0'))
    {

        displayController.messageBox.innerText=`${displayController.secondPlayerObject.name} wins!  Click anywhere to continue`;
        displayController.messageBox.style.display='flex';
        displayController.secondPlayerObject.playerWins = true;
        gameOver=true;
        
    }

    //Logic for no-win situation
    if (gameboard.gameboardFull()===true && gameOver===false) 

{
    displayController.messageBox.innerText='No winner! Click anywhere to continue' ;
    displayController.messageBox.style.display='flex';
    gameOver=true;
}


}



let displayController = function(){
    const resetButton = document.querySelector('.reset-button');
    const square0= document.getElementById('square-0');
    const square1= document.getElementById('square-1');
    const square2= document.getElementById('square-2');
    const square3= document.getElementById('square-3');
    const square4= document.getElementById('square-4');
    const square5= document.getElementById('square-5');
    const square6= document.getElementById('square-6');
    const square7= document.getElementById('square-7');
    const square8= document.getElementById('square-8');
    const messageBox=document.querySelector('.message-box');
    const playButton=document.querySelector('.play-button');
    let playerOneName = document.getElementById('player1name');
    let playerTwoName = document.getElementById('player2name');
    const namesInputContainer = document.querySelector('.player-names');
    const namesText = document.querySelector('.names-text');
    let firstPlayerObject = createPlayerObject(' ');
    let secondPlayerObject = createPlayerObject(' ');
    let boardPlusReset = document.querySelector('.board-plus-reset-container')
    let playerNamesContainer = document.querySelector('.text-and-player-names-container');
   
    let squareClicked;

    const boardContainer=document.querySelector('.board-container');

    const closeMessageBox = function(){

        if (displayController.messageBox.style.display='flex')
            {displayController.messageBox.style.display='none';
        gameboard.resetBoardAndGame();
            }
        
    }

    const captureNameInputs = function(){
        if (playerOneName.value==='' || playerTwoName.value === '')
            {alert("You must enter both names and press the 'Play' button to start")}

    else {
        boardPlusReset.style.display='flex';
        firstPlayerObject.name=playerOneName.value;
        secondPlayerObject.name = playerTwoName.value;
        gameboard.currentPlayer=firstPlayerObject.name;
        playerOneName.style.backgroundColor='rgb(245, 245, 133)';
        playerTwoName.style.backgroundColor='rgb(245, 245, 133)';
    }
    }

    playButton.addEventListener('click', captureNameInputs)

    messageBox.addEventListener('click', closeMessageBox);

//Links clicked cells to array values
    const getNumberFromClick = function (event){
        
    if(event.target.id==="square-0"){gameboard.squareClicked=0;}
    else if(event.target.id==="square-1"){gameboard.squareClicked=1;}
    else if(event.target.id==="square-2"){gameboard.squareClicked=2;}
    else if(event.target.id==="square-3"){gameboard.squareClicked=3;}
    else if(event.target.id==="square-4"){gameboard.squareClicked=4;}
    else if(event.target.id==="square-5"){gameboard.squareClicked=5;}
    else if(event.target.id==="square-6"){gameboard.squareClicked=6;}
    else if(event.target.id==="square-7"){gameboard.squareClicked=7;}
    else if(event.target.id==="square-8"){gameboard.squareClicked=8;}

    
    if (gameboard.board[gameboard.squareClicked]==='X' || gameboard.board[gameboard.squareClicked]==='0')
        {alert('That square is taken, please select another')
    gameboard.currentPlayer = gameboard.currentPlayer===firstPlayerObject.name? gameboard.currentPlayer=secondPlayerObject.name: gameboard.currentPlayer=firstPlayerObject.name;


        } 

    else if (gameboard.currentPlayer===firstPlayerObject.name) {gameboard.board[gameboard.squareClicked]='X'}
    else {gameboard.board[gameboard.squareClicked]='0'}
        square0.innerText=gameboard.board[0];
        square1.innerText=gameboard.board[1];
        square2.innerText=gameboard.board[2];
        square3.innerText=gameboard.board[3];
        square4.innerText=gameboard.board[4];
        square5.innerText=gameboard.board[5];
        square6.innerText=gameboard.board[6];
        square7.innerText=gameboard.board[7];
        square8.innerText=gameboard.board[8];            


    gameboard.currentPlayer = gameboard.currentPlayer===firstPlayerObject.name? gameboard.currentPlayer=secondPlayerObject.name: gameboard.currentPlayer=firstPlayerObject.name;

    playGame();        }
    
        boardContainer.addEventListener('click', getNumberFromClick);

        resetButton.addEventListener('click', gameboard.resetBoardAndGame);


    return {playerNamesContainer, boardPlusReset, firstPlayerObject, secondPlayerObject, playerOneName, playerTwoName, squareClicked, messageBox, square0, square1, square2, square3, square4, square5, square6, square7, square8};  


        }();





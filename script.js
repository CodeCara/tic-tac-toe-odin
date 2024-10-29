
//Gameboard Factory Function IIFE
let gameboard = function (){
    let board = [" ", " ", " ",
    " ", " ", " ",
    " ", " ", " "]
    
    let newboard = [...board];
    let currentPlayer = 'Player One';
    let squareClicked;
    
    const getBoard = () => board; 
    
    console.log(board);
    //Board is being reset correctly (tested)
    let resetBoard = function (){
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
        displayController.messageBox.style.visibility='hidden';
        return board;
    };

    let gameboardFull = function (board) {
        //how to shorten the if statement?
     if (gameboard.board.includes(' '))
    
        {return false;}
     else {return true;}


    };


  return {board, gameboardFull, resetBoard, getBoard, squareClicked, currentPlayer};
  

} ();




let createPlayerObject = function(playerName) {
   
    const name = playerName; 
  //Should value below be left as null?
   const currentPlayerChoice = null;
        const playerWins=false;
       console.log(playerName);
        return {name, currentPlayerChoice, playerWins}
    }









let playGame = function () {
    let gameOver = false;
    let winner;
   


const firstPlayerObject = createPlayerObject('Player One');
const secondPlayerObject = createPlayerObject('Player Two');



    if ((gameboard.board[0]==='X' && gameboard.board[1]==='X' && gameboard.board[2]==='X') ||
    (gameboard.board[3]==='X' && gameboard.board[4]==='X' && gameboard.board[5]==='X') ||
    (gameboard.board[6]==='X' && gameboard.board[7]==='X' && gameboard.board[8]==='X') ||   
    (gameboard.board[0]==='X' && gameboard.board[3]==='X' && gameboard.board[6]==='X') ||
    (gameboard.board[1]==='X' && gameboard.board[4]==='X' && gameboard.board[7]==='X') ||
    (gameboard.board[2]==='X' && gameboard.board[5]==='X' && gameboard.board[8]==='X') ||
    (gameboard.board[0]==='X' && gameboard.board[4]==='X' && gameboard.board[8]==='X') ||
    (gameboard.board[6]==='X' && gameboard.board[4]==='X' && gameboard.board[2]==='X'))
    {
        console.log(gameboard.gameboardFull());
        displayController.messageBox.innerText='Player One wins!  GAME OVER!';
        displayController.messageBox.style.visibility='visible';
        firstPlayerObject.playerWins = true;
        winner='Player One';
        console.log(gameboard.board);

        // console.log(firstPlayerObject);
        // console.log(secondPlayerObject);
        // console.log(firstPlayerObject.currentPlayerChoice);
        gameOver=true;
        
    }


    else if ((gameboard.board[0]==='0' && gameboard.board[1]==='0'&& gameboard.board[2]==='0') ||
    (gameboard.board[3]==='0' && gameboard.board[4]==='0' && gameboard.board[5]==='0') ||
    (gameboard.board[6]==='0' && gameboard.board[7]==='0' && gameboard.board[8]==='0') ||   
    (gameboard.board[0]==='0' && gameboard.board[3]==='0' && gameboard.board[6]==='0') ||
    (gameboard.board[1]==='0' && gameboard.board[4]==='0' && gameboard.board[7]==='0') ||
    (gameboard.board[2]==='0' && gameboard.board[5]==='0' && gameboard.board[8]==='0') ||
    (gameboard.board[0]==='0' && gameboard.board[4]==='0' && gameboard.board[8]==='0') ||
    (gameboard.board[6]==='0' && gameboard.board[4]==='0' && gameboard.board[2]==='0'))
    {
        console.log(gameboard.gameboardFull());

        displayController.messageBox.innerText='Player Two wins!  GAME OVER!';
        displayController.messageBox.style.visibility='visible';
        secondPlayerObject.playerWins = true;
        winner='Player Two';
        console.log(firstPlayerObject);
        console.log(secondPlayerObject);
        console.log(gameboard.board);
        // console.log(firstPlayerObject.currentPlayerChoice);
        gameOver=true;
        
    }

    console.log(gameOver);
    console.log(gameboard.gameboardFull());


    if (gameboard.gameboardFull()===true && gameOver===false) 

{
    displayController.messageBox.innerText='No winner this time!';
    displayController.messageBox.style.visibility='visible';
    gameOver=true;
    console.log(gameboard.board);

    console.log(gameOver);
}


return {winner};
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
    let squareClicked;;

    const boardContainer=document.querySelector('.board-container');

    const getNumberFromClick = function (event){
console.log(gameboard.currentPlayer);
        



    if(event.target.id==="square-0"){gameboard.squareClicked=0;}
    else if(event.target.id==="square-1"){gameboard.squareClicked=1;}
    else if(event.target.id==="square-2"){gameboard.squareClicked=2;}
    else if(event.target.id==="square-3"){gameboard.squareClicked=3;}
    else if(event.target.id==="square-4"){gameboard.squareClicked=4;}
    else if(event.target.id==="square-5"){gameboard.squareClicked=5;}
    else if(event.target.id==="square-6"){gameboard.squareClicked=6;}
    else if(event.target.id==="square-7"){gameboard.squareClicked=7;}
    else if(event.target.id==="square-8"){gameboard.squareClicked=8;}

    


    if (gameboard.currentPlayer==='Player One') {gameboard.board[gameboard.squareClicked]='X'}
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


    console.log(gameboard.currentPlayer);
    gameboard.currentPlayer = gameboard.currentPlayer==='Player One'? gameboard.currentPlayer='Player Two': gameboard.currentPlayer='Player One';



    console.log(gameboard.squareClicked);
    console.log({gameboard});

    playGame();        }
    
        boardContainer.addEventListener('click', getNumberFromClick);

        resetButton.addEventListener('click', gameboard.resetBoard);


        // player1Score.innerText=firstPlayerObject.score;
        // player2Score.innerText=secondPlayerObject.score;








// console.log(getArrayNumberFromClick.playerChoiceFromClick);



  
    return {squareClicked, messageBox, square0, square1, square2, square3, square4, square5, square6, square7, square8};  


        }();


console.log({displayController});




//Gameboard Factory Function IIFE
let gameboard = function (){
    let board = new Array(9);
    for (let i= 0; i < board.length ; i++)
        {board[i]=i;} 
    let newboard = [...board];
    let currentPlayerChoice;
    
    const getBoard = () => board; 
    
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


  return {board, gameboardFull, resetBoard, getBoard};
  

} ();


// let gameboard = function (){
//     //empty array elements upon which Xs or 0s can be generated
//   return new Array(9);
  

// } ();


// for (let i= 0; i < gameboard.length ; i++)
//     {
//         gameboard[i]=i;
    
//     }  

let createPlayerObject = function(playerName) {
   
    const name = playerName; 
  //Should value below be left as null?
   const currentPlayerChoice = null;
   let score = 0;
        const playerWins=false;
       console.log(playerName);
        return {name, currentPlayerChoice, score, playerWins}
    }



    let displayController = function(){
        const enterButton = document.querySelector('.enter-button');
        const startButton = document.querySelector('.start-button');
        const resetButton = document.querySelector('.reset-button');
        const player1NameSelect = document.querySelector('.player1');
        const player2NameSelect = document.querySelector('.player2');
        const square0= document.getElementById('square-0');
        const square1= document.getElementById('square-1');
        const square2= document.getElementById('square-2');
        const square3= document.getElementById('square-3');
        const square4= document.getElementById('square-4');
        const square5= document.getElementById('square-5');
        const square6= document.getElementById('square-6');
        const square7= document.getElementById('square-7');
        const square8= document.getElementById('square-8');
    
    
        
        
    
    
        let squareClicked;
    
        const boardContainer=document.querySelector('.board-container');
    
        const getNumberFromClick = function (event){
            
    
        if(event.target.id==="square-0"){displayController.squareClicked=0;}
        else if(event.target.id==="square-1"){displayController.squareClicked=1;}
        else if(event.target.id==="square-2"){displayController.squareClicked=2;}
        else if(event.target.id==="square-3"){displayController.squareClicked=3;}
        else if(event.target.id==="square-4"){displayController.squareClicked=4;}
        else if(event.target.id==="square-5"){displayController.squareClicked=5;}
        else if(event.target.id==="square-6"){displayController.squareClicked=6;}
        else if(event.target.id==="square-7"){displayController.squareClicked=7;}
        else if(event.target.id==="square-8"){displayController.squareClicked=8;}
    // firstPlayerObject.currentPLayerChoice=playerChoiceFromClick; 
    // console.log(squareClicked);
        }
            boardContainer.addEventListener('click', getNumberFromClick);
    
    
    // console.log(getArrayNumberFromClick.playerChoiceFromClick);
    
    
    
      
        return {squareClicked};  

    
            }();
    
    
    console.log({displayController});








let playGame = function () {
    let gameOver = false;
    let winner;
   


const firstPlayerObject = createPlayerObject('Player One');
const secondPlayerObject = createPlayerObject('Player Two');
let currentPLayer=firstPlayerObject.name;
console.log(currentPLayer);



//********CHECK CHECKIFNUMBER FOR DISPLAY FUNCTION******* */
const checkIfNumber = function() {
    let filteredArray = gameboard.board.filter((gameboardItem) => typeof(gameboardItem) ==='number');
    if (filteredArray.length===0){alert('The game is over - no winners this time!');
    console.log('The game is over - no winners this time!');
    winner==="No winner this round"
    console.log(firstPlayerObject);
    console.log(secondPlayerObject);
        gameOver===true;

    }

    }


while (gameOver===false) {

    {
        console.log(displayController.squareClicked);
        firstPlayerObject.currentPlayerChoice = displayController.squareClicked;
        console.log('bla');
        console.log({firstPlayerObject});
console.log({gameboard});
    //    firstPlayerObject.currentPlayerChoice = prompt(`Player One, enter a value between 0 and 8`);
    //    firstPlayerObject.currentPlayerChoice = prompt(`Player One, enter a value between 0 and 8`);

    //To stop prompt asking for number even when all elements have been filled with Xs and 0s
    checkIfNumber();
    firstPlayerObject.currentPlayerChoice*=1;
    console.log(firstPlayerObject);



if (gameboard[firstPlayerObject.currentPlayerChoice]==='X' || gameboard[firstPlayerObject.currentPlayerChoice]==='0')
    {   
    
        // firstPlayerObject.currentPlayerChoice = prompt(`Player One, that number has already been selected, please select another number`)
        //     firstPlayerObject.currentPlayerChoice = prompt(`Player One, that number has already been selected, please select another number`)

    checkIfNumber();
    firstPlayerObject.currentPlayerChoice*=1;
    }
    
    if (firstPlayerObject.currentPlayerChoice<0 || firstPlayerObject.currentPlayerChoice>8)
    { 
        // firstPlayerObject.currentPlayerChoice = prompt(`Player One, you may only enter a value between 0 and 8`);
        // firstPlayerObject.currentPlayerChoice = prompt(`Player One, you may only enter a value between 0 and 8`);
        checkIfNumber();
        firstPlayerObject.currentPlayerChoice*=1;
    }
    
    
    if (gameboard.board.includes(firstPlayerObject.currentPlayerChoice)) {
        gameboard[firstPlayerObject.currentPlayerChoice]='X';
    
    }
    

        console.log({gameboard});
    
    if ((gameboard[0]==='X' && gameboard[1]==='X' && gameboard[2]==='X') ||
    (gameboard[3]==='X' && gameboard[4]==='X' && gameboard[5]==='X') ||
    (gameboard[6]==='X' && gameboard[7]==='X' && gameboard[8]==='X') ||   
    (gameboard[0]==='X' && gameboard[3]==='X' && gameboard[6]==='X') ||
    (gameboard[1]==='X' && gameboard[4]==='X' && gameboard[7]==='X') ||
    (gameboard[2]==='X' && gameboard[5]==='X' && gameboard[8]==='X') ||
    (gameboard[0]==='X' && gameboard[4]==='X' && gameboard[8]==='X') ||
    (gameboard[6]==='X' && gameboard[4]==='X' && gameboard[2]==='X'))
    {
        console.log(`${firstPlayerObject.name} wins!  GAME OVER!`);
        firstPlayerObject.playerWins = true;
        winner='Player One';
        firstPlayerObject.score=1;
        secondPlayerObject.score=0;
        // console.log(firstPlayerObject);
        // console.log(secondPlayerObject);
        // console.log(firstPlayerObject.currentPlayerChoice);
        gameOver=true;
        
    }




  
    if (gameOver===false)
    {   checkIfNumber();}
    
        //NEED TO REPLACE NUMBER PROMP TS
        // secondPlayerObject.currentPlayerChoice= prompt(`Player Two, enter a value between 0 and 8`);}
        // secondPlayerObject.currentPlayerChoice= prompt(`Player Two, enter a value between 0 and 8`);}
    else {alert(`Player One won!`)};
    secondPlayerObject.currentPlayerChoice*=1;
    if (gameboard[secondPlayerObject.currentPlayerChoice]==="X" || gameboard[secondPlayerObject.currentPlayerChoice]==="0")
        {   checkIfNumber();
    
            // secondPlayerObject.currentPlayerChoice = prompt(`Player Two, that number has already been selected, please select another number`)}
            //     secondPlayerObject.currentPlayerChoice = prompt(`Player Two, that number has already been selected, please select another number`)}

    if (secondPlayerObject.currentPlayerChoice<0 || secondPlayerObject.currentPlayerChoice>8)
        {   checkIfNumber();
    
            // secondPlayerObject.currentPlayerChoice = prompt(`Player Two, you may only enter a value between 0 and 8`);}
            //            secondPlayerObject.currentPlayerChoice = prompt(`Player Two, you may only enter a value between 0 and 8`);}
 
    
    if (gameboard.board.includes(secondPlayerObject.currentPlayerChoice)) {
        gameboard[secondPlayerObject.currentPlayerChoice]='0';}



//         console.log(gameboard);
// console.log(gameOver);


    if 
    ((gameboard[0]==='0' && gameboard[1]==='0' && gameboard[2]==='0') ||
    (gameboard[3]==='0' && gameboard[4]==='0' && gameboard[5]==='0') ||
    (gameboard[6]==='0' && gameboard[7]==='0' && gameboard[8]==='0') ||
    (gameboard[0]==='0' && gameboard[3]==='0' && gameboard[6]==='0') ||
    (gameboard[1]==='0' && gameboard[4]==='0' && gameboard[7]==='0') ||
    (gameboard[2]==='0' && gameboard[5]==='0' && gameboard[8]==='0') ||
    (gameboard[0]==='0' && gameboard[4]==='0' && gameboard[8]==='0') ||
    (gameboard[6]==='0' && gameboard[4]==='0' && gameboard[2]==='0'))
    {
        console.log(`${secondPlayerName} wins!.  GAME OVER!`);
        //access gamover variable through object!!!!!!!!!!!!!!!!!!!!!!
        gameOver=true;
        //connect vari below to object!
        secondPlayerObject.playerWins=true;
        winner='Player Two';

        secondPlayerObject.score=1;
        firstPlayerObject.score=0;

        console.log(firstPlayerObject);
        console.log(secondPlayerObject);
        prompt(`${secondPlayerName} 2 wins!`)


       }


    }

   
}




}

return {winner, gameOver};
}


}
playGame();


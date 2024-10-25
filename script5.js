// Gameboard function IIFE, called once creates gameboard array
let createGameboard = function (){
    let gameboard = new Array(9);
    for (let i= 0; i < gameboard.length ; i++)
        {
            gameboard[i]=i;
        
        } 
       

    //empty array elements upon which Xs or 0s can be generated
  return { gameboard};
  

} ();

console.log(createGameboard.gameboard);
console.log({createGameboard});


// Gameboard function IIFE, called once creates gameboard array
let createPlayerObject = function(playerName) {
   
    const name = playerName; 
  //Should value below be left as null?
   const currentPlayerChoice = null;
   let score = 0;
        const playerWins=false;
        return {name, currentPlayerChoice, score, playerWins}
    }

    // ******DISPLAY CONTROLLER FUNCTION******

let displayController = function(){
    const enterButton = document.querySelector('.enter-button');
    const startButton = document.querySelector('.start-button');
    const resetButton = document.querySelector('.reset-button');
    const player1NameSelect = document.querySelector('.player1');
    const player2NameSelect = document.querySelector('.player2');
   const scoreboardPlayer1Name = document.querySelector('.scoreboard-player-1');
   const scoreboardPlayer2Name = document.querySelector('.scoreboard-player-2');
   const player1Score = document.querySelector('.player1-score');
   const playersScore = document.querySelector('.player2-score');
   let player1Score = 0;
   let player2Score = 0 ;
   let winner =' ';


   
    const square0= document.getElementById('square-0');
    const square1= document.getElementById('square-1');
    const square2= document.getElementById('square-2');
    const square3= document.getElementById('square-3');
    const square4= document.getElementById('square-4');
    const square5= document.getElementById('square-5');
    const square6= document.getElementById('square-6');
    const square7= document.getElementById('square-7');
    const square8= document.getElementById('square-8');

    // square0.innerText="";

 

    let firstPlayerName = '';
    let secondPlayerName = '';
    let squareClicked = '';
    let currentPlayer='';


    const boardContainer=document.querySelector('.board-container');


    let getArrayNumberFromClick = function (event){
let dynamicCurrentPlayer=displayController.currentPlayer;
console.log(dynamicCurrentPlayer);
let filteredArray = createGameboard.gameboard.filter((gameboardItem) => typeof(gameboardItem) ==='number');

   
    if(event.target.id==="square-0"){displayController.squareClicked=0} 
    else if(event.target.id==="square-1"){displayController.squareClicked=1}
    else if(event.target.id==="square-2"){displayController.squareClicked=2}
    else if(event.target.id==="square-3"){displayController.squareClicked=3}
    else if(event.target.id==="square-4"){displayController.squareClicked=4}
    else if(event.target.id==="square-5"){displayController.squareClicked=5}
    else if(event.target.id==="square-6"){displayController.squareClicked=6}
    else if(event.target.id==="square-7"){displayController.squareClicked=7}
    else if(event.target.id==="square-8"){displayController.squareClicked=8}   

    if (dynamicCurrentPlayer === displayController.firstPlayerName) {event.target.innerText='X'; createGameboard.gameboard[displayController.squareClicked]='X';}
    else {event.target.innerText='0'; createGameboard.gameboard[displayController.squareClicked]='0';}

    // let checkForFirstPlayerWin = function(){ 
        // while (gameOver===false) {
            if ((createGameboard.gameboard[0]==='X' && createGameboard.gameboard[1]==='X' && createGameboard.gameboard[2]==='X') ||
                (createGameboard.gameboard[3]==='X' && createGameboard.gameboard[4]==='X' && createGameboard.gameboard[5]==='X') ||
                (createGameboard.gameboard[6]==='X' && createGameboard.gameboard[7]==='X' && createGameboard.gameboard[8]==='X') ||   
                (createGameboard.gameboard[0]==='X' && createGameboard.gameboard[3]==='X' && createGameboard.gameboard[6]==='X') ||
                (createGameboard.gameboard[1]==='X' && createGameboard.gameboard[4]==='X' && createGameboard.gameboard[7]==='X') ||
                (createGameboard.gameboard[2]==='X' && createGameboard.gameboard[5]==='X' && createGameboard.gameboard[8]==='X') ||
                (createGameboard.gameboard[0]==='X' && createGameboard.gameboard[4]==='X' && createGameboard.gameboard[8]==='X') ||
                (createGameboard.gameboard[6]==='X' && createGameboard.gameboard[4]==='X' && createGameboard.gameboard[2]==='X'))
                {console.log(`${displayController.firstPlayerName} wins`);
                displayController.winner=`${displayController.firstPlayerName}`;
                    gameOver=true;}
  
                   if 
                        ((createGameboard.gameboard[0]==='0' && createGameboard.gameboard[1]==='0' && createGameboard.gameboard[2]==='0') ||
                        (createGameboard.gameboard[3]==='0' && createGameboard.gameboard[4]==='0' && createGameboard.gameboard[5]==='0') ||
                        (createGameboard.gameboard[6]==='0' && createGameboard.gameboard[7]==='0' && createGameboard.gameboard[8]==='0') ||
                        (createGameboard.gameboard[0]==='0' && createGameboard.gameboard[3]==='0' && createGameboard.gameboard[6]==='0') ||
                        (createGameboard.gameboard[1]==='0' && createGameboard.gameboard[4]==='0' && createGameboard.gameboard[7]==='0') ||
                        (createGameboard.gameboard[2]==='0' && createGameboard.gameboard[5]==='0' && createGameboard.gameboard[8]==='0') ||
                        (createGameboard.gameboard[0]==='0' && createGameboard.gameboard[4]==='0' && createGameboard.gameboard[8]==='0') ||
                        (createGameboard.gameboard[6]==='0' && createGameboard.gameboard[4]==='0' && createGameboard.gameboard[2]==='0'))
                        {console.log(`${displayController.secondPlayerName} wins`);
                        displayController.winner=`${displayController.secondPlayerName}`;
                        gameOver=true;  

                    }
                    
                    //No-win situation
                    if 
                    (filteredArray.length===1 && displayController.winner===' '){console.log('The game is over - no winners this time!');
                    displayController.winner='No winner';
                    gameOver=true;
                    };
                   
                                                                   

//Tertiary structure/expression
// dynamicCurrentPlayer = dynamicCurrentPlayer === displayController.firstPlayerName?
//  dynamicCurrentPlayer=displayController.secondPlayerName: dynamicCurrentPlayer = displayController.firstPlayerName; 
    
dynamicCurrentPlayer = dynamicCurrentPlayer=== displayController.firstPlayerName?
(dynamicCurrentPlayer = displayController.secondPlayerName) && (displayController.currentPlayer=displayController.secondPlayerName):
 (dynamicCurrentPlayer = displayController.firstPlayerName) && (displayController.currentPlayer=displayController.firstPlayerName); 
    
}

console.log(createGameboard.gameboard);





    
        boardContainer.addEventListener('click', getArrayNumberFromClick);


    let captureNameInputs = function() {
        let firstPlayerName = player1NameSelect.value;
       let secondPlayerName = player2NameSelect.value; 
       


       displayController.firstPlayerName= firstPlayerName;
       displayController.currentPlayer=firstPlayerName;

       displayController.secondPlayerName= secondPlayerName;
       displayController.scoreboardPlayer1Name.innerText = firstPlayerName;
       displayController.scoreboardPlayer2Name.innerText = secondPlayerName;
       //make firstPlayer default currentPlayer iniitially
       displayController.dynamicCurrentPlayer=firstPlayerName;
       let firstPlayerObject = createPlayerObject(displayController.firstPlayerName);
       let secondPlayerObject = createPlayerObject(displayController.secondPlayerName);
console.log(firstPlayerObject);
console.log(secondPlayerObject);
       console.log(`${firstPlayerName}, select a square`);


    //    playGame();
     
         }

         enterButton.addEventListener('click', captureNameInputs);
         console.log({captureNameInputs});

return {firstPlayerName, 
        secondPlayerName,  
        squareClicked, 
        scoreboardPlayer1Name, 
        scoreboardPlayer2Name, 
        player1Score, 
        player2Score,
        currentPlayer,
        winner,
    }

    }    ();

console.log({displayController});

        // ******PLAYGAME FUNCTION******
let playGame = function () {
    let gameOver = false;
   



    let firstPlayerObject = createPlayerObject(displayController.firstPlayerName);
    let secondPlayerObject = createPlayerObject(displayController.secondPlayerName);
 
let firstPlayerName = firstPlayerObject.name;

let secondPlayerName = secondPlayerObject.name;


let playerChoice;
console.log(firstPlayerObject);
console.log(secondPlayerObject);
console.log('playgame running');
console.log(gameOver);

return {gameOver, firstPlayerName, secondPlayerName};

}
playGame();






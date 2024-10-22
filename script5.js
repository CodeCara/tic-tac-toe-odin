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
console.log(createGameboard.gameboard[1]);


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
   let player1Score = 0;
   let player2Score = 0 ;

   
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

    let square0Content= square0.innerText;
    let square1Content= square1.innerText;
    let square2Content= square2.innerText;
    let square3Content= square3.innerText;
    let square4Content= square4.innerText;
    let square5Content= square5.innerText;
    let square6Content= square6.innerText;
    let square7Content= square7.innerText;
    let square8Content= square8.innerText;




    let firstPlayerName = '';
    let secondPlayerName = '';
    let squareClicked = '';
    let currentPlayer=firstPlayerName;


    const boardContainer=document.querySelector('.board-container');


    let getArrayNumberFromClick = function (event){

    displayController.currentPLayer = firstPlayerName;
    
    if(event.target.id==="square-0"){displayController.squareClicked=0}
    else if(event.target.id==="square-1"){displayController.squareClicked=1}
    else if(event.target.id==="square-2"){displayController.squareClicked=2}
    else if(event.target.id==="square-3"){displayController.squareClicked=3}
    else if(event.target.id==="square-4"){displayController.squareClicked=4}
    else if(event.target.id==="square-5"){displayController.squareClicked=5}
    else if(event.target.id==="square-6"){displayController.squareClicked=6}
    else if(event.target.id==="square-7"){displayController.squareClicked=7}
    else if(event.target.id==="square-8"){displayController.squareClicked=8}   
    // displayController.squareClicked=selectedSquare;

// if (displayController.currentPlayer === firstPlayerName && displayController.squareClicked ===0)
//     {square0Content='X'; displayController.currentPlayer=secondPlayerName;
// console.log(square0Content);

//SQUARE0CONTENT DOESNT WOTK, SQUARE0.INNERTEXT DOES

if (displayController.currentPlayer ===firstPlayerName) {event.target.innerText='X'}
else {event.target.innerText='0'}

    




    }
        boardContainer.addEventListener('click', getArrayNumberFromClick);


    let captureNameInputs = function() {
        let firstPlayerName = player1NameSelect.value;
       let secondPlayerName = player2NameSelect.value; 
 
       //as defaults to first before click
// if (currentPlayer===secondPlayerName){currentPlayer=firstPlayerName}
// else (currentPlayer=secondPlayerName);


       displayController.firstPlayerName= firstPlayerName;
       displayController.secondPlayerName= secondPlayerName;
       displayController.scoreboardPlayer1Name.innerText = firstPlayerName;
       displayController.scoreboardPlayer2Name.innerText = secondPlayerName;
       let firstPlayerObject = createPlayerObject(displayController.firstPlayerName);
       let secondPlayerObject = createPlayerObject(displayController.secondPlayerName);
console.log(firstPlayerObject);
console.log(secondPlayerObject);
       console.log(`${firstPlayerName}, select a square`);

console.log(currentPlayer);
// let test = getArrayNumberFromClick();
// console.log({test});

    //    playGame();
     
         }

         enterButton.addEventListener('click', captureNameInputs);
         console.log({captureNameInputs});

return {firstPlayerName, 
        secondPlayerName, 
        currentPlayer,
        square0Content, 
        square1Content, 
        square2Content, 
        square3Content, 
        square4Content, 
        square5Content, 
        square6Content, 
        square7Content, 
        square8Content, 
        squareClicked, 
        scoreboardPlayer1Name, 
        scoreboardPlayer2Name, 
        player1Score, 
        player2Score,
    };

        }();

console.log({displayController});
console.log(displayController.squareClicked);

        // ******PLAYGAME FUNCTION******
let playGame = function () {
    let gameOver = false;
    let winner;
   



    let firstPlayerObject = createPlayerObject(displayController.firstPlayerName);
    let secondPlayerObject = createPlayerObject(displayController.secondPlayerName);
 
let firstPlayerName = firstPlayerObject.name;

let secondPlayerName = secondPlayerObject.name;


let playerChoice;
console.log(firstPlayerObject);
console.log(secondPlayerObject);

return {gameOver, firstPlayerName, secondPlayerName}

}
playGame();


// ******CHECK CHECKIFNUMBER FOR DISPLAY FUNCTION******
// const checkIfNumber = function() {
//     let filteredArray = gameboard.filter((gameboardItem) => typeof(gameboardItem) ==='number');
//     if (filteredArray.length===0){alert('The game is over - no winners this time!');
//     console.log('The game is over - no winners this time!');
//     winner==="No winner this round"
//     console.log(firstPlayerObject);
//     console.log(secondPlayerObject);
//         gameOver===true;

//     }

//     }
   

// while (gameOver===false) {


//     {
//         // firstPlayerObject.currentPlayerChoice = prompt(`${firstPlayerObject.name}, enter a value between 0 and 8`);
// // alert(`${firstPlayerObject.name}, select a square`);
// firstPlayerName.currentPlayerChoice=displayController.squareClicked;
// console.log(firstPlayerName.currentPlayerChoice);
//     //    firstPlayerObject.currentPlayerChoice = prompt(`${firstPlayerObject.name}, enter a value between 0 and 8`);
//             // firstPlayerObject.currentPlayerChoice

    
       
//     //To stop prompt asking for number even when all elements have been filled with Xs and 0s
//     checkIfNumber();
//     // firstPlayerObject.currentPlayerChoice*=1;
//     console.log(firstPlayerObject);


// // ******************************
// // if (gameboard[firstPlayerObject.currentPlayerChoice]==='X' || gameboard[firstPlayerObject.currentPlayerChoice]==='0')
// //     {   
    
// //         // firstPlayerObject.currentPlayerChoice = prompt(`${firstPlayerObject.name}, that number has already been selected, please select another number`)
    
// //     checkIfNumber();
// //     firstPlayerObject.currentPlayerChoice*=1;
// //     }
// //    ********************************** 
//     // if (firstPlayerObject.currentPlayerChoice<0 || firstPlayerObject.currentPlayerChoice>8)
//     // { 
    
//     //     // firstPlayerObject.currentPlayerChoice = prompt(`${firstPlayerObject.currentPlayerChoice}, you may only enter a value between 0 and 8`);
//     //     checkIfNumber();
//     //     firstPlayerObject.currentPlayerChoice*=1;
//     // }
    
    
//     if (gameboard.includes(firstPlayerObject.currentPlayerChoice)) {
//         gameboard[firstPlayerObject.currentPlayerChoice]='X';
//         console.log(gameboard);
    
//     }
    

//         console.log(gameboard);
    
//     if ((gameboard[0]==='X' && gameboard[1]==='X' && gameboard[2]==='X') ||
//     (gameboard[3]==='X' && gameboard[4]==='X' && gameboard[5]==='X') ||
//     (gameboard[6]==='X' && gameboard[7]==='X' && gameboard[8]==='X') ||   
//     (gameboard[0]==='X' && gameboard[3]==='X' && gameboard[6]==='X') ||
//     (gameboard[1]==='X' && gameboard[4]==='X' && gameboard[7]==='X') ||
//     (gameboard[2]==='X' && gameboard[5]==='X' && gameboard[8]==='X') ||
//     (gameboard[0]==='X' && gameboard[4]==='X' && gameboard[8]==='X') ||
//     (gameboard[6]==='X' && gameboard[4]==='X' && gameboard[2]==='X'))
//     {
//         console.log(`${firstPlayerObject.name} wins!  GAME OVER!`);
//         firstPlayerObject.playerWins = true;
//         winner=firstPlayerName;
//         firstPlayerObject.score=1;
//         secondPlayerObject.score=0;
//         console.log(firstPlayerObject);
//         console.log(secondPlayerObject);
//         console.log(firstPlayerObject.currentPlayerChoice);
//         gameOver=true;
        
//     }




  
//     if (gameOver===false)
//     {   checkIfNumber();
    
//         // secondPlayerObject.currentPlayerChoice= prompt(`${secondPlayerName}, enter a value between 0 and 8`);}
//         // secondPlayerObject.currentPlayerChoice= alert(`${secondPlayerName}, pick a square`);}
//         secondPlayerObject.currentPlayerChoice=displayController.squareClicked;}

//     else {alert(`${firstPlayerName} won!`)};
//     secondPlayerObject.currentPlayerChoice*=1;
//     if (gameboard[secondPlayerObject.currentPlayerChoice]==="X" || gameboard[secondPlayerObject.currentPlayerChoice]==="0")
//         {   checkIfNumber();
    
//             secondPlayerObject.currentPlayerChoice = prompt(`${secondPlayerName}, that number has already been selected, please select another number`)}
    
//     if (secondPlayerObject.currentPlayerChoice<0 || secondPlayerObject.currentPlayerChoice>8)
//         {   checkIfNumber();
    
//             secondPlayerObject.currentPlayerChoice = prompt(`${secondPlayerName}, you may only enter a value between 0 and 8`);}
    
//     if (gameboard.includes(secondPlayerObject.currentPlayerChoice)) {
//         gameboard[secondPlayerObject.currentPlayerChoice]='0';}



//         console.log(gameboard);
// console.log(gameOver);


//     if 
//     ((gameboard[0]==='0' && gameboard[1]==='0' && gameboard[2]==='0') ||
//     (gameboard[3]==='0' && gameboard[4]==='0' && gameboard[5]==='0') ||
//     (gameboard[6]==='0' && gameboard[7]==='0' && gameboard[8]==='0') ||
//     (gameboard[0]==='0' && gameboard[3]==='0' && gameboard[6]==='0') ||
//     (gameboard[1]==='0' && gameboard[4]==='0' && gameboard[7]==='0') ||
//     (gameboard[2]==='0' && gameboard[5]==='0' && gameboard[8]==='0') ||
//     (gameboard[0]==='0' && gameboard[4]==='0' && gameboard[8]==='0') ||
//     (gameboard[6]==='0' && gameboard[4]==='0' && gameboard[2]==='0'))
//     {
//         console.log(`${secondPlayerName} wins!.  GAME OVER!`);
//         //access gamover variable through object!!!!!!!!!!!!!!!!!!!!!!
//         gameOver=true;
//         //connect vari below to object!
//         secondPlayerObject.playerWins=true;
//         winner=secondPlayerName;

//         secondPlayerObject.score=1;
//         firstPlayerObject.score=0;

//         console.log(firstPlayerObject);
//         console.log(secondPlayerObject);
//         prompt(`${secondPlayerName} 2 wins!`)


//        }


//     }

   
// }


// } 
//18/10/24
//created new JS file to work on diplayController function


//14/10/24 changed createFirstPlayerObject to firstPlayerObject (same for second)

//playerWings AND score, both probably not needed together

// document.body.onload = displayController;


// ******DISPLAY CONTROLLER FUNCTION******

let displayController = function(){
    const enterButton = document.querySelector('.enter-button');
    const startButton = document.querySelector('.start-button');
    const resetButton = document.querySelector('.reset-button');
    const player1NameSelect = document.querySelector('.player1');
    const player2NameSelect = document.querySelector('.player2');
   


    let firstPlayerName = '';
    let secondPlayerName = '';
    let squareClicked;

    const boardContainer=document.querySelector('.board-container');

    const getArrayNumberFromClick = function (event){
        

    if(event.target.id==="square-0"){playerChoiceFromClick=0; console.log(playerChoiceFromClick); ;}
    else if(event.target.id==="square-1"){playerChoiceFromClick=1; console.log(playerChoiceFromClick); }
    else if(event.target.id==="square-2"){playerChoiceFromClick=2; console.log(playerChoiceFromClick); }
    else if(event.target.id==="square-3"){playerChoiceFromClick=3; console.log(playerChoiceFromClick); }
    else if(event.target.id==="square-4"){playerChoiceFromClick=4; console.log(playerChoiceFromClick); }
    else if(event.target.id==="square-5"){playerChoiceFromClick=5; console.log(playerChoiceFromClick); }
    else if(event.target.id==="square-6"){playerChoiceFromClick=6; console.log(playerChoiceFromClick); }
    else if(event.target.id==="square-7"){playerChoiceFromClick=7; console.log(playerChoiceFromClick); }
    else if(event.target.id==="square-8"){playerChoiceFromClick=8; console.log(playerChoiceFromClick); }
    console.log(event.target.id);
    console.log(event.currentTarget);
firstPlayerObject.currentPLayerChoice=playerChoiceFromClick;    
    }
        boardContainer.addEventListener('click', getArrayNumberFromClick);


console.log({getArrayNumberFromClick});
// console.log(getArrayNumberFromClick.playerChoiceFromClick);

    let captureNameInputs = function() {
        let firstPlayerName = player1NameSelect.value;
       let secondPlayerName = player2NameSelect.value; 
       displayController.firstPlayerName= firstPlayerName;
       displayController.secondPlayerName= secondPlayerName;
    //    playGame();
     return {firstPlayerName, secondPlayerName}
     
         }

         enterButton.addEventListener('click', captureNameInputs);
         console.log({captureNameInputs});
  

return {firstPlayerName, secondPlayerName, square0Content, square1Content, square2Content, square3Content, square4Content, square5Content, square6Content, square7Content, square8Content, squareClicked};

        }();


console.log({displayController});


// ******GAMEBOARD FUNCTION******
let createGameboard = function (){

    let gameboard = new Array(9);

    //empty array elements upon which Xs or 0s can be generated
  return { gameboard};
  

} ();
console.log(gameboard);


for (let i= 0; i < gameboard.length ; i++)
    {
        gameboard[i]=i;
    
    }  


// ******CREATE PLAYER FUNCTION******
let createPlayerObject = function(playerName) {
   
    const name = playerName; 
  //Should value below be left as null?
   const currentPlayerChoice = null;
   let score = 0;
        const playerWins=false;
       console.log(playerName);
        return {name, currentPlayerChoice, score, playerWins}
    }

// ******PLAYGAME FUNCTION******
let playGame = function () {
    let gameOver = false;
    let winner;
   



let firstPlayerObject = createPlayerObject(displayController.firstPlayerName);

console.log(displayController.firstPlayerName);
let firstPlayerName = firstPlayerObject.name;
console.log(firstPlayerObject);


let secondPlayerObject = createPlayerObject('dave');
let secondPlayerName = secondPlayerObject.name;

let playerChoice;





// ******CHECK CHECKIFNUMBER FOR DISPLAY FUNCTION******
const checkIfNumber = function() {
    let filteredArray = gameboard.filter((gameboardItem) => typeof(gameboardItem) ==='number');
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
        // firstPlayerObject.currentPlayerChoice = prompt(`${firstPlayerObject.name}, enter a value between 0 and 8`);
// alert(`${firstPlayerObject.name}, select a square`);
firstPlayerName.currentPlayerChoice=displayController.squareClicked;
console.log(firstPlayerName.currentPlayerChoice);
    //    firstPlayerObject.currentPlayerChoice = prompt(`${firstPlayerObject.name}, enter a value between 0 and 8`);
            // firstPlayerObject.currentPlayerChoice

    
       
    //To stop prompt asking for number even when all elements have been filled with Xs and 0s
    checkIfNumber();
    // firstPlayerObject.currentPlayerChoice*=1;
    console.log(firstPlayerObject);


// ******************************
// if (gameboard[firstPlayerObject.currentPlayerChoice]==='X' || gameboard[firstPlayerObject.currentPlayerChoice]==='0')
//     {   
    
//         // firstPlayerObject.currentPlayerChoice = prompt(`${firstPlayerObject.name}, that number has already been selected, please select another number`)
    
//     checkIfNumber();
//     firstPlayerObject.currentPlayerChoice*=1;
//     }
//    ********************************** 
    // if (firstPlayerObject.currentPlayerChoice<0 || firstPlayerObject.currentPlayerChoice>8)
    // { 
    
    //     // firstPlayerObject.currentPlayerChoice = prompt(`${firstPlayerObject.currentPlayerChoice}, you may only enter a value between 0 and 8`);
    //     checkIfNumber();
    //     firstPlayerObject.currentPlayerChoice*=1;
    // }
    
    
    if (gameboard.includes(firstPlayerObject.currentPlayerChoice)) {
        gameboard[firstPlayerObject.currentPlayerChoice]='X';
        console.log(gameboard);
    
    }
    

        console.log(gameboard);
    
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
        winner=firstPlayerName;
        firstPlayerObject.score=1;
        secondPlayerObject.score=0;
        console.log(firstPlayerObject);
        console.log(secondPlayerObject);
        console.log(firstPlayerObject.currentPlayerChoice);
        gameOver=true;
        
    }




  
    if (gameOver===false)
    {   checkIfNumber();
    
        // secondPlayerObject.currentPlayerChoice= prompt(`${secondPlayerName}, enter a value between 0 and 8`);}
        // secondPlayerObject.currentPlayerChoice= alert(`${secondPlayerName}, pick a square`);}
        secondPlayerObject.currentPlayerChoice=displayController.squareClicked;}

    else {alert(`${firstPlayerName} won!`)};
    secondPlayerObject.currentPlayerChoice*=1;
    if (gameboard[secondPlayerObject.currentPlayerChoice]==="X" || gameboard[secondPlayerObject.currentPlayerChoice]==="0")
        {   checkIfNumber();
    
            secondPlayerObject.currentPlayerChoice = prompt(`${secondPlayerName}, that number has already been selected, please select another number`)}
    
    if (secondPlayerObject.currentPlayerChoice<0 || secondPlayerObject.currentPlayerChoice>8)
        {   checkIfNumber();
    
            secondPlayerObject.currentPlayerChoice = prompt(`${secondPlayerName}, you may only enter a value between 0 and 8`);}
    
    if (gameboard.includes(secondPlayerObject.currentPlayerChoice)) {
        gameboard[secondPlayerObject.currentPlayerChoice]='0';}



        console.log(gameboard);
console.log(gameOver);


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
        winner=secondPlayerName;

        secondPlayerObject.score=1;
        firstPlayerObject.score=0;

        console.log(firstPlayerObject);
        console.log(secondPlayerObject);
        prompt(`${secondPlayerName} 2 wins!`)


       }


    }

   
}


}

console.log({displayController});
playGame();
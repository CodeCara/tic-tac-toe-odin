//18/10/24
//created new JS file to work on diplayController function


//14/10/24 changed createFirstPlayerObject to firstPlayerObject (same for second)

//playerWings AND score, both probably not needed together

// document.body.onload = displayController;


// ******DISPLAY CONTROLLER FUNCTION******

let displayController = function(){
    let enterButton = document.querySelector('.enter-button');
    let player1NameSelect = document.querySelector('.player1');
    let player2NameSelect = document.querySelector('.player2');
    let square1= document.querySelector('.square-1');
    let square2= document.querySelector('.square-2');
    let square3= document.querySelector('.square-3');
    let square4= document.querySelector('.square-4');
    let square5= document.querySelector('.square-5');
    let square6= document.querySelector('.square-6');
    let square7= document.querySelector('.square-7');
    let square8= document.querySelector('.square-8');
    let square9= document.querySelector('.square-9');

    let square1Content= square1.innerText;
    let square2Content= square2.innerText;
    let square3Content= square3.innerText;
    let square4Content= square4.innerText;
    let square5Content= square5.innerText;
    let square6Content= square6.innerText;
    let square7Content= square7.innerText;
    let square8Content= square8.innerText;
    let square9Content= square9.innerText;

    let firstPlayerName = '';
    let secondPlayerName = '';


    let captureNameInputs = function() {
        let firstPlayerName = player1NameSelect.value;
       let secondPlayerName = player2NameSelect.value; 
       displayController.firstPlayerName= firstPlayerName;
       displayController.secondPlayerName= secondPlayerName;
       
     return {firstPlayerName, secondPlayerName}
     
         }

         enterButton.addEventListener('click', captureNameInputs);
         console.log({captureNameInputs});
  

return {firstPlayerName, secondPlayerName, square1Content, square2Content, square3Content, square4Content, square5Content, square6Content, square7Content, square8Content, square9Content};

        }();
console.log({displayController});


// ******GAMEBOARD FUNCTION******
let gameboard = function (){
    //empty array elements upon which Xs or 0s can be generated
  return new Array(9);
  

} ();


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
   



const firstPlayerObject = createPlayerObject('john');
const firstPlayerName = firstPlayerObject.name;

const secondPlayerObject = createPlayerObject('dave');
const secondPlayerName = secondPlayerObject.name;




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
       firstPlayerObject.currentPlayerChoice = prompt(`${firstPlayerObject.name}, enter a value between 0 and 8`);










       
    //To stop prompt asking for number even when all elements have been filled with Xs and 0s
    checkIfNumber();
    firstPlayerObject.currentPlayerChoice*=1;
    console.log(firstPlayerObject);



if (gameboard[firstPlayerObject.currentPlayerChoice]==='X' || gameboard[firstPlayerObject.currentPlayerChoice]==='0')
    {   
    
        firstPlayerObject.currentPlayerChoice = prompt(`${firstPlayerObject.name}, that number has already been selected, please select another number`)
    
    checkIfNumber();
    firstPlayerObject.currentPlayerChoice*=1;
    }
    
    if (firstPlayerObject.currentPlayerChoice<0 || firstPlayerObject.currentPlayerChoice>8)
    { 
    
        firstPlayerObject.currentPlayerChoice = prompt(`${firstPlayerObject.currentPlayerChoice}, you may only enter a value between 0 and 8`);
        checkIfNumber();
        firstPlayerObject.currentPlayerChoice*=1;
    }
    
    
    if (gameboard.includes(firstPlayerObject.currentPlayerChoice)) {
        gameboard[firstPlayerObject.currentPlayerChoice]='X';
    
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
    
        secondPlayerObject.currentPlayerChoice= prompt(`${secondPlayerName}, enter a value between 0 and 8`);}
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


return {winner};

}

// playGame();
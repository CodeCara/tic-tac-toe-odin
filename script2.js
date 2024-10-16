
//14/10/24 changed createFirstPlayerObject to firstPlayerObject (same for second)

//playerWings AND score, both probably not needed together

// document.body.onload = displayController;
let displayController = function(){
















}();














let gameboard = function (){
    //empty array elements upon which Xs or 0s can be generated
  return new Array(9);
  

} ();


for (let i= 0; i < gameboard.length ; i++)
    {
        gameboard[i]=i;
    
    }  

let createPlayerObject = function(playerName) {
   
    const name = playerName; 
  //Should value below be left as null?
   const currentPlayerChoice = null;
   let score = 0;
        const playerWins=false;
       console.log(playerName);
        return {name, currentPlayerChoice, score, playerWins}
    }


let playGame = function () {
    let gameOver = false;
    let winner;
   



const firstPlayerObject = createPlayerObject('john');
const firstPlayerName = firstPlayerObject.name;

const secondPlayerObject = createPlayerObject('dave');
const secondPlayerName = secondPlayerObject.name;





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


// let  currentGame = playGame();
// console.log({currentGame});







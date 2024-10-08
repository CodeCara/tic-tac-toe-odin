

//createGameboard Object, IIFE structure, as will only be called once



//displayController, IIFE structure, as will only be called once
let displayController = function () {

//do something

} ();


    
//control game flow
//tuck playGame inside createPlayerObject to enable access to const playerName(closures)
function playGame ()
{

    //createPlayer factory function
    //assign X to player1 and O to player2

function createPlayerObject (player) {

    const playerName = player;
   console.log({player});
    return {player}
}



let gameboard = function (){
    //empty array elements upon which Xs or 0s can be generated
  return new Array(9);
  

} ();


for (let i= 0; i < gameboard.length ; i++)
    {//assigning values equivalent to index to each array position
        //equate sqaures to 1 to 9 rather than 0 to 8, to make the board easier to visualise
        gameboard[i]=i+1;
    
       
    }   



function playRound () {
const player1 = prompt('Enter the name of player 1');
createPlayerObject (player1);

//need to figure out how to associate name grabbed here with createPlayerObject
const player2 = prompt('Enter the name of player 2');
createPlayerObject (player2);
let player1Choice = prompt('Player 1, enter a value between 1 and 9');
if (player1Choice<1 || player1Choice>9)
{player1Choice = prompt('You may only enter a value between 1 and 9');}
console.log(player1Choice);



let player2Choice= prompt('Player 2, enter a value between 1 and 9');
if (player2Choice<1 || player2Choice>9)
    {player2Choice = prompt('You may only enter a value between 1 and 9');}
console.log(player2Choice);



player1Choice*=1;
player2Choice*=1;
if (gameboard.includes(player1Choice)) {
    gameboard[player1Choice]='X';
    
   // player1Choice = prompt ('This number has already been selected, choose a different one');

}

if (gameboard.includes(player2Choice)) {
    gameboard[player2Choice]='0';

    // player2Choice = prompt ('This number has already been selected, choose a different one');

} 
console.log(gameboard);
}


playRound();

// switch (a,b,c)
// {case: a===b; 
// console.log('it works');
// break;
// case: b===c;
// console.log('it still works');
// break;

// }

}

playGame();






    





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





const player1 = prompt('Enter the name of player 1');
createPlayerObject (player1);

//need to figure out how to associate name grabbed here with createPlayerObject
const player2 = prompt('Enter the name of player 2');
createPlayerObject (player2);
let player1Choice = prompt('Player 1, enter a value between 0 and 8');
let player2Choice= prompt('Player 2, enter a value between 0 and 8');
player1Choice*=1;
player1Choice*=1;

console.log(player1Choice);


let gameboard = function (){
    //empty array elements upon which Xs or 0s can be generated
  return new Array(9);
  
    
    
} ();




for (let i= 0; i < gameboard.length; i++)
    {//assigning values equivalent to index to each array position
        gameboard[i]=i;
       
        // console.log(player1Choice);
    }    


console.log(player1Choice);

if (gameboard.includes(player1Choice))


    {gameboard[player1Choice]='X';
        console.log(gameboard[player1Choice]);
    }

    else {console.log('nada');}





    





console.log(player1);
console.log(player2);
console.log(player1Choice);
console.log(player2Choice);
















}

playGame();






    




//displayController, IIFE structure, as will only be called once
const displayController = function () {

    //do something
    
    } ();
    
    //11 oct 24...

    //need to sort out playerWins code (tried to ref object, player is not defined, tried to 'call from object)





        
    function createPlayerObject (player) {
    const player = prompt('Enter player name');  
    doSomething = function(){console.log('rando func')};  // 
        const playerWins=false;
        return {player, playerWins, doSomething}
    }
    
  
    
    // let player1Wins = false;
    // let player2Wins = false;
    
    
    
    
    const playGame = function () {
        let gameOver = false;
    
       
    
   let gameboard = function (){
  return new Array(9);
  

} ();

for (let i= 0; i < gameboard.length ; i++)
    {
        gameboard[i]=i;
    
    } 


createPlayerObject.player1();
    // const player1 = prompt('Enter the name of Player 1 who will play Xs');
    // createPlayerObject (player1);
    
    // const player2 = prompt('Enter the name of Player 2 who will play 0s');
    // createPlayerObject (player2);
    
    const checkIfNumber = function() {
        let filteredArray = gameboard.filter((gameboardItem) => typeof(gameboardItem) ==='number');
        if (filteredArray.length===0){alert('The game is over - no winners this time!');
        console.log('The game is over - no winners this time!');
            gameOver===true;
        }
        }
    
    
    
    while (gameOver===false) {
    
    {
       checkIfNumber();
    let player1Choice = prompt(`${player1}, enter a value between 0 and 8`);
    checkIfNumber();
    player1Choice*=1;
    
    
    
    
    if (gameboard[player1Choice]==='X' || gameboard[player1Choice]==='0')
    {   checkIfNumber();
    
        player1Choice = prompt(`${player1}, that number has already been selected, please select another number`)
    
    checkIfNumber();
    player1Choice*=1;
    }
    
    if (player1Choice<0 || player1Choice>8)
    {   checkIfNumber();
    
        player1Choice = prompt(`${player1}, you may only enter a value between 0 and 8`);
        checkIfNumber();
        player1Choice*=1;
        
    }
   
    
    if (gameboard.includes(player1Choice)) {
        gameboard[player1Choice]='X';
    console.log(gameboard);}
    
    
    if ((gameboard[0]==='X' && gameboard[1]==='X' && gameboard[2]==='X') ||
    (gameboard[3]==='X' && gameboard[4]==='X' && gameboard[5]==='X') ||
    (gameboard[6]==='X' && gameboard[7]==='X' && gameboard[8]==='X') ||   
    (gameboard[0]==='X' && gameboard[3]==='X' && gameboard[6]==='X') ||
    (gameboard[1]==='X' && gameboard[4]==='X' && gameboard[7]==='X') ||
    (gameboard[2]==='X' && gameboard[5]==='X' && gameboard[8]==='X') ||
    (gameboard[0]==='X' && gameboard[4]==='X' && gameboard[8]==='X') ||
    (gameboard[6]==='X' && gameboard[4]==='X' && gameboard[2]==='X'))
    {
        console.log(`${player1} wins!  GAME OVER!`);
        gameOver=true;
        player1.playerWins = true;
    }
    
       
    
    let player2Choice;
    if (gameOver===false)
    {   checkIfNumber();
    
        player2Choice= prompt(`${player2}, enter a value between 0 and 8`);}
    else {alert(`${player1} won!`)};
    player2Choice*=1;
    if (gameboard[player2Choice]==="X" || gameboard[player2Choice]==="0")
        {   checkIfNumber();
    
            player2Choice = prompt(`${player2}, that number has already been selected, please select another number`)}
    
    if (player2Choice<0 || player2Choice>8)
        {   checkIfNumber();
    
            player2Choice = prompt(`${player2}, you may only enter a value between 0 and 8`);}
    
    if (gameboard.includes(player2Choice)) {
        gameboard[player2Choice]='0';}
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
        console.log(`${player2} wins!.  GAME OVER!`);
        gameOver=true;
        player2.playerWins=true;
        prompt(`${player2} 2 won!`)
    
        
       }
    
    //Includes check only need to check for one number as actually checking if all squars have been selected
    //  if (gameboard.includes(0) && player1Wins===false && player2Wins===false)  {console.log('Nobody wins this round');}  
    
    
    }
     }
            
     
    // console.log({player1, player2, checkIfNumber, playGame});
console.log({player1, player2, createPlayerObject, playGame});
    return {player1, player2, createPlayerObject, playGame, gameOver};

   
    
    }
    
   
    // let johnPlayer = createPlayerObject('john');
    // console.log({johnPlayer});

    playGame();
    
   
   
    ;
    
   
    // switch (a,b,c)
    // {case: a===b; 
    // console.log('it works');
    // break;
    // case: b===c;
    // console.log('it still works');
    // break;
    
    // }
let createPlayerObject = function(playerName) {
   
  const name = playerName; 
//Should value below be left as null?
 const currentPlayerChoice = null;
 let score = 0;
      const playerWins=false;
      return {name, currentPlayerChoice, score, playerWins}
  }


  let newObj = createPlayerObject('john');
  console.log({newObj});
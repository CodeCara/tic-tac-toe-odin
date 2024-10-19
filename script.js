let enterButton = document.querySelector('.enter-button');
let player1NameSelect = document.querySelector('.player1');
let player2NameSelect = document.querySelector('.player2');

let initialiaseNameInputs = function () {
        
       
    //    let player1Name = player1NameSelect.value;
    //   let player2Name = player2NameSelect.value;
    
      let player1Name = '';
      let player2Name = '';

      let captureNameInputs = function() {
        let name1 = player1NameSelect.value;
       let name2 = player2NameSelect.value; 
       initialiaseNameInputs.player1Name=name1;
       initialiaseNameInputs.player2Name=name2;
       console.log(name1, name2);
     
     return {name1, name2};
     
         }
         
       
         enterButton.addEventListener('click', captureNameInputs);
         console.log({captureNameInputs});









    
    return {player1Name, player2Name}
    
        }();

        console.log({initialiaseNameInputs});
       
        

// // let enterButton = document.querySelector('.enter-button');
// // let player1NameSelect = document.querySelector('.player1');
// // let player2NameSelect = document.querySelector('.player2');

// // let initialiaseNameInputs = function () {
        
       
// //     //    let player1Name = player1NameSelect.value;
// //     //   let player2Name = player2NameSelect.value;
    
// //       let player1Name = '';
// //       let player2Name = '';

// //       let captureNameInputs = function() {
// //         let name1 = player1NameSelect.value;
// //        let name2 = player2NameSelect.value; 
// //        initialiaseNameInputs.player1Name=name1;
// //        initialiaseNameInputs.player2Name=name2;
// //        console.log(name1, name2);
     
// //      return {name1, name2};
     
// //          }
         
       
// //          enterButton.addEventListener('click', captureNameInputs);
// //          console.log({captureNameInputs});









    
// //     return {player1Name, player2Name}
    
// //         }();

// //         console.log({initialiaseNameInputs});
// //CODE BELOW WORKS 20 OCT       
// // let boardContainer=document.querySelector('.board-container');
     
// // let selectSquare = function(event){
// //   event.target.innerText='bla';
// // }

// // boardContainer.addEventListener('click', selectSquare)






// let boardContainer=document.querySelector('.board-container');
// // let selectSquare = function(event){
// //     event.currentTarget.innerText='bla';
// //     console.log('gameboad');
// // }


// const getArrayNumberFromClick = function (){
// //     if(event.target=square1){playerChoice=gameboard[0];
// // console.log('it worls');
// //     }

// console.log('hello');


// // if(event.target=square1){console.log('it works');};
        


// //     if(event.target=square2){playerChoice=gameboard[1]}
// //     if(event.target=square3){playerChoice=gameboard[2]}
// //     if(event.target=square4){playerChoice=gameboard[0]}
// //     if(event.target=square5){playerChoice=gameboard[0]}
// //     if(event.target=square6){playerChoice=gameboard[0]}
// //     if(event.target=square7){playerChoice=gameboard[0]}
// //     if(event.target=square8){playerChoice=gameboard[0]}
// //     if(event.target=square9){playerChoice=gameboard[0]}


// }
// boardContainer.addEventListener('click', getArrayNumberFromClick);
const boardContainer=document.querySelector('.board-container');

const square1= document.getElementById('square-1');

const getArrayNumberFromClick = function (event){
  console.log(event.target.id);
  console.log(event.target.className);}
  // if(event.target.id='square1'){console.log('sq 1 it works')};
  boardContainer.addEventListener('click', getArrayNumberFromClick);

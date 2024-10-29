let gameboard = function (){
    let board = [" ", " ", " ",
    " ", " ", " ",
    " ", " ", " "]
    
    // for (let i= 0; i < board.length ; i++)
    //     {board[i]=i;} 
    let newboard = [...board];
    let currentPlayer = 'Player One';
    let squareClicked;
    
    const getBoard = () => board; 
    
    console.log(board);
    //Board is being reset correctly (tested)
    let resetBoard = function (board){
        board = [...newboard];
        console.log(board);
    };

    let gameboardFull = function (board) {
        //how to shorten the if statement?
     if (gameboard.board.includes(' '))
    
        {return false;}
     else {return true;}


    };


  return {board, gameboardFull, resetBoard, getBoard, squareClicked, currentPlayer};
  

} ();

gameboard.board[3]='X';
gameboard.resetBoard(gameboard.board);

// let resetBoard = function (board){
//     board = [...newboard];
//     console.log(board);
//     // return board;

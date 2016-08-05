document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board =  {
  cells: [   {
    row: 0,
    col: 0,
    isMine: true,
    isMarked: false,
    hidden: true,
    surroundingMines: 0
  },
  {
    row: 0,
    col: 1,
    isMine: false,
    isMarked: false,
    hidden: true,
    surroundingMines: 0

  },
  {
     row: 0,
     col: 2,
     isMine: true,
     isMarked: false,
     hidden: true,
     surroundingMines: 0

   },
   {
     row: 1,
     col: 0,
     isMine: false,
     isMarked: false,
     hidden: true,
     surroundingMines: 0

   },
   {
     row: 1,
     col: 1,
     isMine: false,
     isMarked: true,
     hidden: true,
     surroundingMines: 2

   },{
     row: 1,
     col: 2,
     isMine: false,
     isMarked: false,
     hidden: true,
     surroundingMines: 0

   },
   {
     row: 2,
     col: 0,
     isMine: false,
     isMarked: false,
     hidden: true,
     surroundingMines: 0

   },
   {
     row: 2,
     col: 1,
     isMine: true,
     isMarked: false,
     hidden: true,
     surroundingMines: 0

   },{
     row: 2,
     col: 2,
     isMine: false,
     isMarked: false,
     hidden: true,
     surroundingMines: 0
   },]
 };

// for (k in board.cells[1]) {
//   document.write (board.cells [k] + "<br />");
// }

  //  document.write(board.cells[0,4]);
  //  document.write board.['cells']);
  //  console.log(board.cells[9]);
  //  console.log(board.cells[3]);
  //  console.log(board.cells[2]);

    function startGame () {

      for (var i = 0; i < board.cells.length; i++) {
      board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
    }
  // // Don't remove this function call: it makes the game work!
    lib.initBoard()
  }
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0
  for (var i = 0; i < surroundingCells.length; i++) {
    if(surroundingCells[i].isMine === true) {
      count++
    }
  }
  return count
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//

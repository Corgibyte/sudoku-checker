export function Sudoku() {
  this.board = [];
  for (let i = 0; i < 9; i++) {
    let col = [];
    for (let j = 0; j < 9; j++) {
      col.push(0);
    }
    this.board.push(col);
  }
}

Sudoku.prototype.addBox = function(num, row, col) {
  this.board[row -1][col - 1] = num;
};

//returns value of given box
Sudoku.prototype.getBoxValue = function(row, col) {
  return this.board[row -1][col -1];
};

Sudoku.prototype.isLegal = function() {
  //check columns  
  for (let i = 0; i < 9; i++) {
    if (!isLegalGroup(this.board[i])) {
      return false;
    }
  }
  //check rows
  for (let i = 0; i < 9; i++) {
    let rowTest = [];
    for (let j = 0; j < 9; j++) {
      rowTest.push(this.board[j][i]);
    }
    if (!isLegalGroup(rowTest)) {
      return false;
    }
  }
  //check squares
  const squares = this.getSquares();
  for (let i = 0; i < 9; i++) {
    if (!isLegalGroup(squares[i])) {
      return false;
    }
  }
  return true;
};

Sudoku.prototype.getSquares = function() {
  let squares = [];
  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      let square = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          square.push(this.board[row + i][col + j]);
        }
      }
      squares.push(square);
    }
  }
  return squares;
};

export function isLegalGroup(array) {
  let isLegal = true;
  for (let i = 1; i <= 9 && isLegal; i++) {
    isLegal = array.includes(i);
  }
  return isLegal;
}
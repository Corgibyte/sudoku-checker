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
  // for (let i = 0; i < 9; i++) {
  //   if (this.board[i]
  // }
};

Sudoku.prototype.isLegalGroup = function(array) {
  let isLegal = true;
  for (let i = 1; i <= 9 && isLegal; i++) {
    isLegal = array.includes(i);
  }
  return isLegal;
};
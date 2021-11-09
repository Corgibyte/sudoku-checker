import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

import { Sudoku } from './sudoku.js';

function updateSquares(sudoku) {
  let boardStr = "";
  for (let row = 0; row < 9; row++) {
    let rowStr = "<div class='row'>";
    for (let col = 0; col < 9; col++) {
      const squareValue = sudoku.board[row][col];
      let squareStr = "";
      if (squareValue !== 0) {
        squareStr = squareValue.toString();
      } else {
        squareStr = " ";
      }   
      rowStr = rowStr.concat("<div class='col-1 square'><h3>" + squareStr + "</h3></div>");
    }
    rowStr = rowStr.concat("</div>");
    boardStr = boardStr.concat(rowStr);
  }
  $("#squares").html(boardStr);
}

$("#sudoku").submit(function(event) {
  event.preventDefault();
  const squareValue = parseInt($("#square-value").val());
  const row = parseInt($("#square-row").val());
  const col = parseInt($("#square-col").val());
  testSudoku.addBox(squareValue, row, col);
  updateSquares(testSudoku);
});

$("#checkButton").click(function() {
  console.log(testSudoku.isLegal());
});

let testSudoku = new Sudoku();
updateSquares(testSudoku);
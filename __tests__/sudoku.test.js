import { exportAllDeclaration } from '@babel/types';
import { Sudoku } from './../src/sudoku.js';
import { isLegalGroup } from './../src/sudoku.js';

describe('Sudoku', () => {

  test('should create sudoku object with no values', () => {
    let testSudoku = new Sudoku();
    expect(testSudoku.board[0][0]).toEqual(0);
    expect(testSudoku.board[8][8]).toEqual(0);
  });
  
  test('should add a provided value to a specific box', () => {
    let testSudoku = new Sudoku();
    testSudoku.addBox(3,3,4);
    expect(testSudoku.board[2][3]).toEqual(3);
  });

  test('should return the value of a specific box', () => {
    let testSudoku = new Sudoku();
    testSudoku.addBox(3,3,4);
    expect(testSudoku.getBoxValue(3,4)).toEqual(3);
  });

  test('should return true if board is legal', () => {
    let testSudoku = new Sudoku();
    testSudoku.board = [[4,3,5,2,6,9,7,8,1],
      [6,8,2,5,7,1,4,9,3], [1,9,7,8,3,4,5,6,2], [8,2,6,1,9,5,3,4,7],
      [3,7,4,6,8,2,9,1,5], [9,5,1,7,4,3,6,2,8], [5,1,9,3,2,6,8,7,4],
      [2,4,8,9,5,7,1,3,6],[7,6,3,4,1,8,2,5,9]];
    testSudoku.isLegal();
    expect(testSudoku.isLegal()).toEqual(true);
  });

  test('should return false if board is empty', () => {
    let testSudoku = new Sudoku();    
    testSudoku.isLegal();
    expect(testSudoku.isLegal()).toEqual(true);
  });

  test('should return false for bad group', () => {
    let testArray = [1,1,3,4,5,6,7,8,9];
    expect(isLegalGroup(testArray)).toEqual(false);
  });

  test('should return true for good group', () => {
    let testArray = [1,2,3,4,5,6,7,8,9];
    expect(isLegalGroup(testArray)).toEqual(true);
  });
});


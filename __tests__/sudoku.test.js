import { exportAllDeclaration } from '@babel/types';
import { Sudoku } from './../src/sudoku.js';

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
    //create solved board
    testSudoku.isLegal();
    expect(testSudoku.isLegal()).toEqual(true);
  });

  test('should return false if board is empty', () => {
    let testSudoku = new Sudoku();    
    testSudoku.isLegal();
    expect(testSudoku.isLegal()).toEqual(true);
  });

  test('should return false for bad group', () => {
    let testSudoku = new Sudoku();
    let testArray = [1,1,3,4,5,6,7,8,9];
    expect(testSudoku.isLegalGroup(testArray)).toEqual(false);
  });

  test('should return true for good group', () => {
    let testSudoku = new Sudoku();
    let testArray = [1,2,3,4,5,6,7,8,9];
    expect(testSudoku.isLegalGroup(testArray)).toEqual(true);
  });
});


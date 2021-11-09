import { exportAllDeclaration } from '@babel/types';
import { Sudoku } from './../src/sudoku.js';

describe('Sudoku', () => {

    test('should create sudoku object with no values', () => {
      let testSudoku = new Sudoku();
      expect(testSudoku.board[0][0]).toEqual(0);
      expect(testSudoku.board[8][8]).toEqual(0);
    });
});


import { exportAllDeclaration } from '@babel/types';
import { Sudoku } from './../src/sudoku.js';

describe('Sudoku', () => {

    test('should create sudoku object with no values', () => {
      let testSudoku = new Sudoku();
      expect(testSudoku.getBoxValue(1,1)).toEqual(0);
    });
});


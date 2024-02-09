import { createBoard } from "./sudoku/SudokuCreator";
import { checkBoard } from "./sudoku/SudokuSolver";
import { invalidBoard1, invalidBoard2, validBoard } from "./sudoku/boards";

console.log(createBoard(8));

const execute = (fn: () => boolean) => {
  if (fn()) {
    console.log("Board is valid");
  } else {
    console.log("Board is invalid");
  }
};

execute(() => checkBoard(validBoard));
execute(() => checkBoard(invalidBoard1));
execute(() => checkBoard(invalidBoard2));
execute(() => checkBoard(createBoard(8)));

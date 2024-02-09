import { generateBoard } from "./sudoku/SudokuCreator";
import { checkBoard } from "./sudoku/SudokuSolver";
import { invalidBoard1, invalidBoard2, validBoard } from "./sudoku/boards";

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

// console.log(generateBoard("easy"));
// console.log(generateBoard("medium"));
generateBoard("easy")
generateBoard("medium")
generateBoard("hard")
console.log(generateBoard("hard"));

import { checkBoard } from "./SudokuSolver";
import { BaseBoard, Board, Range } from "./types";

const COLUMN_SIZE = 9;

export const createBoard = (startValue?: Range<1, 10>): Board => {
  const board: BaseBoard = createDefaultBoard();
  board.forEach((_, rowIndex) => {
    let next = startValue || 0;
    let counter = 0;
    while (counter < COLUMN_SIZE) {
      next = getNextEligible(next);
      board[rowIndex][counter] = next;
      if (!checkBoard(board as Board)) {
        board[rowIndex][counter] = undefined;
      } else {
        counter++;
      }
    }
  });
  return board as Board;
};

const createDefaultBoard = (): BaseBoard => {
  const board: BaseBoard = [];
  for (let i = 0; i < COLUMN_SIZE; i++) {
    board.push([]);
    for (let j = 0; j < COLUMN_SIZE; j++) {
      board[i].push(undefined);
    }
  }
  return board;
};

const getNextEligible = (cur: number): number => {
  if (cur === 9) {
    return 1;
  }
  return cur + 1;
};

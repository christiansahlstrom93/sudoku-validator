import { checkBoard } from "./SudokuSolver";
import { BaseBoard, Board, Range, SudokuLevel } from "./types";

const COLUMN_SIZE = 9;

export const generateBoard = (level: SudokuLevel): Board => {
  const random = Math.floor((Math.random() * 8 + 1)) as Range<1, 10>;
  const board = createBoard(random);
  switch (level) {
    case "easy":
      return removeCells(board, 3);
    case "medium":
      return removeCells(board, 5);
    case "hard":
      return removeCells(board, 7);
  }
};

const removeCells = (board: Board, eliminate: number): Board => {
  board.forEach((row) => {
    for (let i = 0; i < eliminate; i++) {
      const randomIndex = Math.floor(Math.random() * 8);
      row[randomIndex] = undefined as any;
    }
  });
  return board;
}

const createBoard = (startValue?: Range<1, 10>): Board => {
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

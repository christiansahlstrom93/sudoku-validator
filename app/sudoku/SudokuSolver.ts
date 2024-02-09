import { Board } from "./types";

export const checkBoard = (board: Board): boolean => {
  return checkLengths(board) && checkRows(board) && checkCells(board);
};

const checkRows = (allRows: number[][]) => {
  let result = true;
  allRows.forEach((row) => {
    row.forEach((_, columnIndex) => {
      const vertical = allRows.map((row) => row[columnIndex]);
      if (hasDuplicates(vertical) || hasDuplicates(row)) {
        result = false;
      }
    });
  });
  return result;
};

const checkCells = (board: Board) => {
  let result = true;
  const cells = getCells(board);
  cells.forEach((cell) => {
    if (hasDuplicates(cell)) {
      result = false;
    }
  });
  return result;
};

const getCells = (board: Board) => {
  const cells: number[][] = [];
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const cell = [];
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          cell.push(board[k][l]);
        }
      }
      cells.push(cell);
    }
  }
  return cells;
};

const hasDuplicates = (values: number[]) => {
  const set = new Set<number>();
  let hasDuplicates = false;
  values.forEach((value) => {
    if (value && value !== 0 && set.has(value)) {
      hasDuplicates = true;
    }
    set.add(value);
  });
  return hasDuplicates;
};

const checkLengths = (board: Board): boolean => {
  let result = true;
  if (board.length !== 9) {
    return false;
  }
  board.forEach((row, rowIndex) => {
    if (row.length !== 9) {
      result = false;
    }
  });
  return result;
};

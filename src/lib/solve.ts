import * as R from "ramda";

interface Coordinates {
  row: number;
  col: number;
}

export const solve = (board: string[][]): string[][] => {
  const solvedBoard = R.clone(board);
  if (solveSudoku(solvedBoard)) return solvedBoard;
  return [[]];
};

const solveSudoku = (solvedBoard: string[][]): boolean => {
  const coordinates: Coordinates = { row: 0, col: 0 };
  if (!nextUnassignedLocation(solvedBoard, coordinates)) return true;

  for (let value = 1; value <= 9; value++) {
    const strValue = value.toString();
    if (isSafe(solvedBoard, coordinates.row, coordinates.col, strValue)) {
      solvedBoard[coordinates.row][coordinates.col] = strValue;
      if (solveSudoku(solvedBoard)) return true;
      solvedBoard[coordinates.row][coordinates.col] = "";
    }
  }
  return false;
};

const nextUnassignedLocation = (
  solvedBoard: string[][],
  coordinates: Coordinates
): boolean => {
  for (coordinates.row = 0; coordinates.row < 9; coordinates.row++)
    for (coordinates.col = 0; coordinates.col < 9; coordinates.col++)
      if (R.equals(solvedBoard[coordinates.row][coordinates.col], ""))
        return true;

  return false;
};

const usedInRow = (
  solvedBoard: string[][],
  row: number,
  value: string
): boolean => {
  for (let col = 0; col < 9; col++)
    if (R.equals(solvedBoard[row][col], value)) return true;

  return false;
};

const usedInColumn = (
  solvedBoard: string[][],
  col: number,
  value: string
): boolean => {
  for (let row = 0; row < 9; row++)
    if (R.equals(solvedBoard[row][col], value)) return true;

  return false;
};

const usedInBox = (
  solvedBoard: string[][],
  startRow: number,
  startCol: number,
  value: string
): boolean => {
  for (let row = 0; row < 3; row++)
    for (let col = 0; col < 3; col++)
      if (R.equals(solvedBoard[row + startRow][col + startCol], value))
        return true;

  return false;
};

const isSafe = (
  solvedBoard: string[][],
  row: number,
  col: number,
  value: string
): boolean => {
  return (
    !usedInRow(solvedBoard, row, value) &&
    !usedInColumn(solvedBoard, col, value) &&
    !usedInBox(solvedBoard, row - (row % 3), col - (col % 3), value)
  );
};

export const isValid = (board: string[][]): number => {
  // Check if board is already full
  let emptyEntries = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (R.equals(board[i][j], "")) {
        emptyEntries++;
      }
    }
  }
  if (emptyEntries === 0) return 1;

  // Check if a value is used more than once per row/col/box
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!R.equals(board[i][j], "")) {
        // Check in Column
        for (let m = 0; m < 9; m++)
          if (m !== j && board[i][m] === board[i][j]) return 2;

        // Check in Row
        for (let m = 0; m < 9; m++)
          if (m !== i && board[m][j] === board[i][j]) return 2;

        // Check for Box
        const startRow = i - (i % 3);
        const startCol = j - (j % 3);
        for (let m = 0; m < 3; m++)
          for (let n = 0; n < 3; n++) {
            const row = startRow + m;
            const col = startCol + n;
            if (row !== i && col !== j && board[row][col] === board[i][j])
              return 2;
          }
      }
    }
  }
  return 0;
};

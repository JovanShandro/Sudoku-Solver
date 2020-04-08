import * as R from "ramda";

let solvedBoard: string[][] = [[]];

interface Coordinates {
  row: number;
  col: number;
}

export default (board: string[][]): string[][] => {
  solvedBoard = R.clone(board);
  if (solveSudoku()) return solvedBoard;
  return [[]];
};

const solveSudoku = (): boolean => {
  const coordinates: Coordinates = { row: 0, col: 0 };
  if (!nextUnassignedLocation(coordinates)) return true;

  for (let value = 1; value <= 9; value++) {
    const strValue = value.toString();
    if (isSafe(coordinates.row, coordinates.col, strValue)) {
      solvedBoard[coordinates.row][coordinates.col] = strValue;
      if (solveSudoku()) return true;
      solvedBoard[coordinates.row][coordinates.col] = "";
    }
  }
  return false;
};

const nextUnassignedLocation = (coordinates: Coordinates): boolean => {
  for (coordinates.row = 0; coordinates.row < 9; coordinates.row++)
    for (coordinates.col = 0; coordinates.col < 9; coordinates.col++)
      if (solvedBoard[coordinates.row][coordinates.col] === "") return true;

  return false;
};

const usedInRow = (row: number, value: string): boolean => {
  for (let col = 0; col < 9; col++)
    if (solvedBoard[row][col] === value) return true;
  return false;
};

const usedInColumn = (col: number, value: string): boolean => {
  for (let row = 0; row < 9; row++)
    if (solvedBoard[row][col] === value) return true;
  return false;
};

const usedInBox = (
  startRow: number,
  startCol: number,
  value: string
): boolean => {
  for (let row = 0; row < 3; row++)
    for (let col = 0; col < 3; col++)
      if (solvedBoard[row + startRow][col + startCol] === value) return true;
  return false;
};

const isSafe = (row: number, col: number, value: string): boolean => {
  return (
    !usedInRow(row, value) &&
    !usedInColumn(col, value) &&
    !usedInBox(row - (row % 3), col - (col % 3), value)
  );
};

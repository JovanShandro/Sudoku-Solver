import React, { useState } from "react";
import Square from "./Square";
import Controls from "./Controls";
import { clone, addIndex, map, equals } from "ramda";
import solve from "../lib/solve";
import "../css/Board.css";

const emptyBoard: string[][] = [
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""]
];

const mapWithIndex = addIndex(map);

const Board = () => {
  const [board, setBoard] = useState<string[][]>(emptyBoard);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const clearBoard = () => {
    setBoard(() => emptyBoard);
  };

  const setImportedBoard = (importedBoard: string[][]) => {
    setBoard(() => importedBoard);
  };

  const solveSudoku = () => {
    const solvedBoard = solve(board);
    if (equals([[]])(solvedBoard)) {
      setErrorMessage(() => "Sudoku cannot be solved!");
    } else {
      setErrorMessage(() => "");
      setBoard(() => solvedBoard);
    }
  };

  const setBoardEntry = row => col => value => {
    const newBoard = clone(board);
    newBoard[row][col] = value;
    setBoard(() => newBoard);
  };

  return (
    <div className="mainContent">
      <div className="board">
        <span>
          {mapWithIndex((row: string[], rowNr: number) => (
            <div className="row" key={rowNr}>
              {mapWithIndex((entry: string, colNr: number) => (
                <Square
                  coordinates={{rowNr, colNr}}
                  setBoardEntry={value => setBoardEntry(rowNr)(colNr)(value)}
                  value={entry}
                  key={colNr}
                />
              ))(row)}
            </div>
          ))(board)}
        </span>
      </div>
      <div className="errorMsg">{errorMessage}</div>
      <Controls
        setImportedBoard={setImportedBoard}
        clearBoard={clearBoard}
        solveSudoku={solveSudoku}
      />
    </div>
  );
};

export default Board;

import React, { useState } from "react";
import Square from "./Square";
import Controls from "./Controls";
import { clone, addIndex, map, equals } from "ramda";
import { solve, isValid } from "../lib/solve";
import "../css/Board.css";

type Digit = "" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
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
    setErrorMessage(() => "");
    setBoard(() => emptyBoard);
  };

  const setImportedBoard = (importedBoard: string[][]) => {
    setErrorMessage(() => "");
    setBoard(() => importedBoard);
  };

  const solveSudoku = () => {
    switch (isValid(board)) {
      case 1:
        setErrorMessage(() => "Sudoku is already full!");
        return;
      case 2:
        setErrorMessage(() => "Sudoku is invalid! Recheck the values!");
        return;
      default:
        break;
    }

    const solvedBoard = solve(board);
    if (equals([[]])(solvedBoard)) {
      setErrorMessage(() => "Sudoku cannot be solved");
    } else {
      document.querySelectorAll(".square").forEach(element => {
        if ((element as HTMLInputElement).value === "")
          return element.classList.add("animate");
        else return element;
      });
      setErrorMessage(() => "");
      setTimeout(() => {
        setBoard(() => solvedBoard);
        document
          .querySelectorAll(".square")
          .forEach(element => element.classList.remove("animate"));
      }, 500);
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
                  coordinates={{ rowNr, colNr }}
                  setBoardEntry={value => setBoardEntry(rowNr)(colNr)(value)}
                  value={entry as Digit}
                  key={colNr}
                />
              ))(row)}
            </div>
          ))(board)}
        </span>
      </div>
      {errorMessage !== "" ? (
        <div className="errorMsg">
          <span>
            <i className="fas fa-exclamation"></i>
            {errorMessage}
          </span>
        </div>
      ) : (
        ""
      )}
      <Controls
        setImportedBoard={setImportedBoard}
        clearBoard={clearBoard}
        solveSudoku={solveSudoku}
      />
    </div>
  );
};

export default Board;

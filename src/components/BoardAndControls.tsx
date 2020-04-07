import React, { useState } from "react";
import Square from "./Square";
import Controls from "./Controls";
import { clone, addIndex, map } from "ramda";
import "../css/Board.css";

type Board = string[][];

const emptyBoard: Board = [
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
  const [board, setBoard] = useState<Board>(emptyBoard);
  const clearBoard = () => {
    setBoard(() => emptyBoard);
  };

  const setImportedBoard = (importedBoard: Board) => {
    setBoard(() => importedBoard);
  };
  const solveSudoku = () => {
    // TODO
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
                  setBoardEntry={value => setBoardEntry(rowNr)(colNr)(value)}
                  value={entry}
                  key={colNr}
                />
              ))(row)}
            </div>
          ))(board)}
        </span>
      </div>
      <Controls
        setImportedBoard={setImportedBoard}
        clearBoard={clearBoard}
        solveSudoku={solveSudoku}
      />
    </div>
  );
};

export default Board;

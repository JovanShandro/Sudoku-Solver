import React, { useState } from "react";
import Square from "./Square";
import Controls from "./Controls";
import {addIndex, map} from "ramda";
import "../css/Board.css";

type Board = string[][];

const emptyBoard: Board = [
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '']
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

  return (
    <div className="mainContent">
      <div className="board">
        <span>
          {mapWithIndex((row: string[], ind: number) => (
            <div className="row" key={ind}>
              {mapWithIndex((entry: string, col: number) => (
                <Square key={col} />
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

import React from "react";
import "../css/Controls.css";

type Board = number[][];

interface Props {
  clearBoard: (a) => void;
  setImportedBoard: (b: Board) => void;
  solveSudoku: (b: Board) => void;
}

const Controls: React.FC<Props> = ({
  clearBoard,
  setImportedBoard,
  solveSudoku
}) => {
  return (
    <div>
      <button onClick={clearBoard}>Clear</button>
      <button>Import</button>
      <button>Solve</button>
    </div>
  );
};

export default Controls;

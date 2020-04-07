import React from "react";
import "../css/Controls.css";

interface Props {
  clearBoard: Function;
  setImportedBoard: Function;
  solveSudoku: Function;
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

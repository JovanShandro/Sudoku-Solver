import React from "react";
import {
  pipe,
  split,
  map,
  dropWhile,
  dropLastWhile,
  splitEvery,
  identity,
  take,
  ifElse,
  equals
} from "ramda";
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
  const handleFile = e => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const importedBoard = pipe(
          split("\n"),
          map(row => splitEvery(1)(row.toString().replace(/[ ]/g, ""))),
          map(row =>
            map(col => ifElse(equals("0"), () => "", identity)(col))(row)
          ),
          dropWhile(equals([])),
          dropLastWhile(equals([])),
          take(9)
        )(reader.result);
        setImportedBoard(importedBoard);
      };
      reader.readAsText(e.target.files[0]);
      e.target.value = "";
    }
  };

  return (
    <div>
      <button onClick={clearBoard}>Clear</button>
      <div>
        <label htmlFor="file">Import</label>
        <input
          id="file"
          type="file"
          style={{ visibility: "hidden" }}
          onChange={e => handleFile(e)}
        />
      </div>
      <button onClick={solveSudoku}>Solve</button>
    </div>
  );
};

export default Controls;

import React from "react";
import {
  pipe,
  split,
  map,
  splitEvery,
  identity,
  take,
  ifElse,
  equals,
  filter
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
          map((row: string) => splitEvery(1)(row.replace(/[ ]/g, ""))),
          map((row: string[]) =>
            map((col: string) => ifElse(equals("0"), () => "", identity)(col))(
              row
            )
          ),
          filter((row: string[]) => !equals([], row)),
          take(9)
        )(reader.result);
        setImportedBoard(importedBoard);
      };
      reader.readAsText(e.target.files[0]);
      e.target.value = "";
    }
  };

  return (
    <div className="buttons">
      <button onClick={clearBoard}>Clear</button>
      <div className="fileInput">
        <label htmlFor="file">Import</label>
        <input
          id="file"
          type="file"
          style={{ visibility: "hidden", display: "none" }}
          onChange={e => handleFile(e)}
        />
      </div>
      <button onClick={solveSudoku}>Solve</button>
    </div>
  );
};

export default Controls;

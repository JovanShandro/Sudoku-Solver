import React from "react";
import { pipe, split, map, splitEvery, take } from "ramda";
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
  const handleFile = files => {
    if (files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const importedBoard = pipe(
          split("\n"),
          map(row => splitEvery(1)(row.toString().replace(/[ ]/g, ""))),
          take(9)
        )(reader.result);
        setImportedBoard(importedBoard);
      };
      reader.readAsText(files[0]);
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
          onChange={e => handleFile(e.target.files)}
        />
      </div>
      <button>Solve</button>
    </div>
  );
};

export default Controls;

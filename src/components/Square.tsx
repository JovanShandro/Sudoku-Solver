import React from "react";
import "../css/Square.css";

type Digit = "" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

interface Coordinates {
  rowNr: number,
  colNr: number
}

interface Props {
  setBoardEntry: Function;
  value: Digit;
  coordinates: Coordinates
}

const Square: React.FC<Props> = ({ value, setBoardEntry, coordinates }) => {
  const {rowNr, colNr} = coordinates;
  return (
    <input
      id={`square-${rowNr}-${colNr}`}
      className={`square ${colNr % 3 === 2 ? "m-right" : (rowNr % 3 === 2 ? "m-bottom" : '')}`}
      type="text"
      maxLength={1}
      value={value}
      onChange={t =>
        setBoardEntry(t.currentTarget.value.replace(/[^1-9]/g, ""))
      }
    />
  );
};

export default Square;

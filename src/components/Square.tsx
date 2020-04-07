import React, { useState } from "react";
import "../css/Square.css";

type Digit = "" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

interface Props {
  setBoardEntry: Function;
  value: Digit;
}

const Square: React.FC<Props> = ({ value, setBoardEntry }) => {
  return (
    <input
      className="square"
      type="text"
      maxLength={1}
      value={value}
      onChange={t =>
        setBoardEntry(t.currentTarget.value.replace(/[^0-9]/g, ""))
      }
    />
  );
};

export default Square;

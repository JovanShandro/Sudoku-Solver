import React, { useState } from "react";
import "../css/Square.css";

const Square = () => {
  const [value, setValue] = useState<string>("");

  return (
    //<input maxlength="1" className="square" type="number" min="0" max="9" />
    <input
      className="square"
      type="text"
      maxLength={1}
      value={value}
      onChange={t => setValue(t.currentTarget.value.replace(/[^0-9]/g, ""))}
      //onInput={() =>
      //let string: string = value.toString();
      //string = string.replace(/[^0-9]/g, "");
      //setValue(() => +string);
      //}}
    />
  );
};

export default Square;

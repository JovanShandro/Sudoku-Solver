import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <h1 className="header">Sudoku Solver</h1>
      <p className="description">
        Welcome! Ready to solve some sudoku? Use your mouse and keyboard to
        enter the values you want in the board below and then press solve and
        enjoy the show! In case the given sudoku is unsolvable a message will be
        displayed to inform you. You can use the clear button to completely
        empty the board and the import button to use a text file for entering
        values. The text file must look like
        <span className="tooltip"> this</span>! Use 0 if you want the square to
        be empty.
      </p>
    </div>
  );
};

export default Header;

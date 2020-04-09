import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <h1 className="header">Sudoku Solver</h1>
      <p className="description">
        Welcome! Ready to solve some sudoku? Enter any digit you want in the
        board below and then press solve and enjoy the show! You can use the
        clear button to empty the board and the import button to use a text file
        for entering values. The text file must look like
        <span className="tooltip">
          <span className="tooltip--text"> this</span>
          <span className="tooltip--dropdown">
            1 2 3&nbsp; 4 5 6&nbsp; 7 8 9 <br />
            4 5 6&nbsp; 7 8 9&nbsp; 1 2 3 <br />
            7 8 9&nbsp; 1 2 3&nbsp; 4 5 6 <br />
            <span className="br"></span>
            2 1 4&nbsp; 3 6 5&nbsp; 8 9 7 <br />
            3 6 5&nbsp; 8 9 7&nbsp; 2 1 4 <br />
            8 9 7&nbsp; 2 1 4&nbsp; 3 6 5 <br />
            <span className="br"></span>
            5 3 1&nbsp; 6 4 2&nbsp; 9 7 8 <br />
            6 4 2&nbsp; 9 7 8&nbsp; 5 3 1 <br />
            9 7 8&nbsp; 5 3 1&nbsp; 6 4 2 <br />
          </span>
        </span>
        ! Use 0 if you want the square to be empty.
      </p>
    </div>
  );
};

export default Header;

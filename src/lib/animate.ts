import { TimelineMax, CSSPlugin, Power2 } from "gsap";
import * as R from "ramda";

const plugins = [CSSPlugin];

let squaresInZigZagOrder: HTMLInputElement[] = [];

export default () => {
  getAllSquaresInOrder();

  const tl = new TimelineMax();
  let i: number, j: boolean;
  for (i = 1, j = false; j ? i > 0 : i <= 9; j ? i-- : i++) {
    const layerSquares = R.take(i, squaresInZigZagOrder);
    squaresInZigZagOrder = R.drop(i, squaresInZigZagOrder);
    R.map(square =>
      tl.fromTo(
        square,
        i * 0.004,
        { opacity: 0, x: -20, y: -20 },
        { opacity: 1, x: 0, y: 0, ease: Power2.easeInOut }
      )
    )(layerSquares);
    if (i === 9) j = true;
  }
};

const getAllSquaresInOrder = () => {
  let row: number = 0,
    col: number = 0;
  let row_inc: boolean = false;

  for (let len = 1; len <= 9; ++len) {
    for (let i = 0; i < len; ++i) {
      squaresInZigZagOrder.push(elementAt(row)(col));

      if (i + 1 === len) break;

      if (row_inc) {
        ++row;
        --col;
      } else {
        --row;
        ++col;
      }
    }

    if (len === 9) break;

    // Update row or col valaue according
    // to the last increment
    if (row_inc) {
      ++row;
      row_inc = false;
    } else {
      ++col;
      row_inc = true;
    }
  }

  // Update the indexes of row and col variable
  if (row === 0) {
    if (col === 8) ++row;
    else ++col;
    row_inc = true;
  } else {
    if (row === 8) ++col;
    else ++row;
    row_inc = false;
  }

  for (let len, diag = 8; diag > 0; --diag) {
    if (diag > 9) len = 9;
    else len = diag;

    for (let i = 0; i < len; ++i) {
      squaresInZigZagOrder.push(elementAt(row)(col));

      if (i + 1 === len) break;

      // Update row or col value according
      // to the last increment
      if (row_inc) {
        ++row;
        --col;
      } else {
        ++col;
        --row;
      }
    }

    // Update the indexes of row and col variable
    if (row === 0 || col === 8) {
      if (col === 8) ++row;
      else ++col;

      row_inc = true;
    } else if (col === 0 || row === 8) {
      if (row === 8) ++col;
      else ++row;

      row_inc = false;
    }
  }
};

const elementAt = (row: number) => (col: number): HTMLInputElement => {
  return document.getElementById(`square-${row}-${col}`)! as HTMLInputElement;
};

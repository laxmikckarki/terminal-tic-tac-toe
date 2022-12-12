import { checkIfNoMovesLeft } from './board-printer.js';

/*
    Example board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/

/*
    Given 3 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
        - a row index number (0, 1 or 2)
    Return true if the player has made a move in all 3 squares in the row
    Otherwise, return false
*/
function checkRow(board, player, rowNumber) {
  const checkAllThreeSquares = [];
  for (let i = 0; i < board[rowNumber].length; i++) {
    board[rowNumber][i] === player
      ? checkAllThreeSquares.push(true)
      : checkAllThreeSquares.push(false);
  }
  return checkAllThreeSquares.every((x) => x === true);
}

/*
    Given 3 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
        - a column index number (0, 1 or 2)
    Return true if the player has made a move in all 3 squares in the column
    Otherwise, return false
*/
function checkColumn(board, player, columnNumber) {
  const checkAllThreeSquares = [];
  for (let i = 0; i < board.length; i++) {
    board[i][columnNumber] === player
      ? checkAllThreeSquares.push(true)
      : checkAllThreeSquares.push(false);
  }
  return checkAllThreeSquares.every((x) => x === true);
}

/*
    Given 2 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
    Return true if the player has made a move in 3 diagonal squares
    Otherwise, return false
*/
function checkDiagonal(board, player) {
  const LeftTopToRightBottom = [];
  //left top -> right bottom
  for (let i = 0; i < board.length; i++) {
    board[i][i] === player
      ? LeftTopToRightBottom.push(true)
      : LeftTopToRightBottom.push(false);
  }
  const RightTopToLeftBottom = [];
  //right top -> left bottom
  for (let i = 0, j = board.length - 1; i < board.length, j > -1; i++, j--) {
    board[i][j] === player
      ? RightTopToLeftBottom.push(true)
      : RightTopToLeftBottom.push(false);
  }
  return (
    LeftTopToRightBottom.every((x) => x === true) ||
    RightTopToLeftBottom.every((x) => x === true)
  );
}

/*
    There is no need to change any code below this line.
*/

function checkIfPlayerWon(board, player) {
  for (let i = 0; i <= 2; i++) {
    if (checkRow(board, player, i) || checkColumn(board, player, i)) {
      return true;
    }
  }

  if (checkDiagonal(board, player)) {
    return true;
  }

  return false;
}

export function isGameOver(board) {
  if (checkIfPlayerWon(board, 'X')) {
    console.log('X has won the game!\n');
    return true;
  }

  if (checkIfPlayerWon(board, 'O')) {
    console.log('O has won the game!\n');
    return true;
  }

  if (checkIfNoMovesLeft(board)) {
    console.log('Game Over - Its a tie!\n');
    return true;
  }

  return false;
}

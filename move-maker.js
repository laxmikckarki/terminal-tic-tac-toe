/*
    Given a move and a board (an array of arrays), return true if the move is valid.
        A move is represented by 2 numbers separated by a comma.
        The first number is the row (1, 2 or 3) and the second number is the column (1, 2 or 3).
            Some valid example moves are 1,3 and 2,2.
            Some invalid examples are 0,1 and 2-1.
    Also, a move can only be made in a free space ('_') on the board.
    If the move is not valid:
        - you can output 'Try again...'
        - and then return false
    Testing your function by calling it with some values. An example board is:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/
function validateMove(move, board) {
  // Implement this at the end if you have time, otherwise you can help your teammates!
  const getSplitedArray = move.split(',');

  const moveIncludesComma = move.includes(',');
  const checkIfArrayLengthTwo = getSplitedArray.length === 2;

  const checkFirstValue = getSplitedArray[0] >= 1 && getSplitedArray[0] <= 3;
  const checkSecondValue = getSplitedArray[1] >= 1 && getSplitedArray[1] <= 3;
  const ifMoveValid = checkFirstValue && checkSecondValue;

  const isUnderLineOnBoard =
    board[Math.max(getSplitedArray[0] - 1, 0)][
      Math.max(getSplitedArray[1] - 1, 0)
    ] === '_';
  if (
    moveIncludesComma &&
    checkIfArrayLengthTwo &&
    ifMoveValid &&
    isUnderLineOnBoard
  ) {
    return true;
  } else {
    console.log('Try again...');
    return false;
  }
}

/*
    Given 3 parameters:
        - a board (an array of arrays)
        - a move (2 numbers separated by a comma)
        - a player ('X' or 'O'):
    Check that the move is valid using the validateMove function.
        If the move is not valid, the function should just return false.
        If the move is valid, the function should:
            - Update the board with the player's value ('X' or 'O') in the correct position
            - Return true
*/
export function makeMove(board, move, player) {
  const checkValid = validateMove(move, board);

  if (checkValid) {
    const [i, j] = move.split(',').map((x) => +x);
    board[i - 1][j - 1] = player;
    return true;
  }
  return false;
}

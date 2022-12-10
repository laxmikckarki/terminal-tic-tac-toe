import prompt from 'prompt';
import { isGameOver } from './status-checker.js';
import { makeMove } from './move-maker.js';
import { printBoard } from './board-printer.js';

prompt.message = '';
prompt.start();

async function playGame() {
    let moveNumber = 0;

    const board = [
        ['_0', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_']
    ];

    while(!isGameOver(board)) {
        let player = moveNumber % 2 === 0 ? 'X' : 'O';
        let move;
        
        do {
            move = await getMove(player);
        } while(!makeMove(board, move, player));
console.log(board);
        // printBoard(board);
        moveNumber++;
    }
}

async function getMove(player) {
    let move = await prompt.get(player);
    return move[player];
}

playGame();

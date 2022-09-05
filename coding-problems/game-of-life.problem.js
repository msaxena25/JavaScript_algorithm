console.log('https://leetcode.com/problems/game-of-life/');

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    // if board is empty
    if (!board.length) {
        return;
    }
    const directions = [
        [-1, 0], // up
        [0, 1],  // right
        [1, 0], // down
        [0, -1] // left
    ];
    const sideDirections = [[-1, -1], [-1, 1], [1, 1], [1, -1]];
    const allNeighbors = directions.concat(sideDirections);

    // we will update true for visited element so that we could trace which item has been visited
    let seen = new Array(board.length).fill('').map(() => new Array(board[0].length).fill(false));

    // cloned original board to get real values because we will update live and dead in real board
    let clonedBoard = JSON.parse(JSON.stringify(board));
    // console.log('clonedBoard :', clonedBoard);

    dfs(board, 0, 0, clonedBoard, seen, directions, allNeighbors);
    //console.log('board :', board);

};

function dfs(board, row, col, clonedBoard, seen, directions, allNeighbors) {

    if (row < 0 || row >= board.length ||
        col < 0 || col >= board[0].length ||
        seen[row][col]) {
        return;
    }

    /* RULES OF DEAD & LIVE
      1 -> 0 (when live neighbors are  < 2  or > 3) means 1 will be 1 for only 2 or 3 neighbors.
      0  -> 1 (when live neighbors are 3 ) */
    let countLive = 0;
    for (let i = 0; i < allNeighbors.length; i++) {
        const neighbor = allNeighbors[i];
        const rowPosition = row + neighbor[0];
        const colPosition = col + neighbor[1];
        if (rowPosition >= 0 && rowPosition < board.length &&
            colPosition >= 0 && colPosition < board[0].length) {
            if (clonedBoard[rowPosition][colPosition] === 1) {
                countLive++;
            }
        }
    }
    const ele = board[row][col];
    seen[row][col] = true; // update true into seen once element visited
    if (ele === 1) { // live
        if (countLive < 2 || countLive > 3) {
            board[row][col] = 0;
        }
    } else { // dead
        if (countLive === 3) {
            board[row][col] = 1;
        }
    }

    // travering all elements of 2 d array
    for (let i = 0; i < directions.length; i++) {
        let direction = directions[i];
        dfs(board, row + direction[0], col + direction[1], clonedBoard, seen, directions, allNeighbors);
    }
}

//console.log('[[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]')
//const res = gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]) // seen: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]


/************************************************************** */

// ANOTHER WAY TO TRAVERSE ARRAY BY USING 2 NESTED FOR LOOP

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife1 = function (board) {
    // if board is empty
    if (!board.length) {
        return;
    }
    const directions = [
        [-1, 0], // up
        [0, 1],  // right
        [1, 0], // down
        [0, -1] // left
    ];
    const sideDirections = [[-1, -1], [-1, 1], [1, 1], [1, -1]];
    const allNeighbors = directions.concat(sideDirections);

    // cloned original board to get real values because we will update live and dead in real board
    let clonedBoard = JSON.parse(JSON.stringify(board));
    // console.log('clonedBoard :', clonedBoard);

    for (let i = 0; i < board.length; i++) {
        let row = board[i];
        for (let j = 0; j < row.length; j++) {
            updateLiveAndDead(board, i, j, clonedBoard, allNeighbors)

        }
    }
   // console.log('board :', board);

};


function updateLiveAndDead(board, row, col, clonedBoard, allNeighbors) {

    /* RULES OF DEAD & LIVE
      1 -> 0 (when live neighbors are  < 2  or > 3) means 1 will be 1 for only 2 or 3 neighbors.
      0  -> 1 (when live neighbors are 3 ) */
    let countLive = 0;
    for (let i = 0; i < allNeighbors.length; i++) {
        const neighbor = allNeighbors[i];
        const rowPosition = row + neighbor[0];
        const colPosition = col + neighbor[1];
        if (rowPosition >= 0 && rowPosition < board.length &&
            colPosition >= 0 && colPosition < board[0].length) {
            if (clonedBoard[rowPosition][colPosition] === 1) {
                countLive++;
            }
        }
    }
    const ele = board[row][col];
    if (ele === 1) { // live
        if (countLive < 2 || countLive > 3) {
            board[row][col] = 0;
        }
    } else { // dead
        if (countLive === 3) {
            board[row][col] = 1;
        }
    }
}

console.log('[[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]')
gameOfLife1([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]) // seen: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
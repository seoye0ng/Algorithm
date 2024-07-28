function solution(board) {
    function isWinner(player) {
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true;
        }
        
        for (let i = 0; i < 3; i++) {
            if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true;
        }
        
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
        
        if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;
        
        return false;
    }

    let oCount = 0, xCount = 0;
    for (let row of board) {
        for (let cell of row) {
            if (cell === 'O') oCount++;
            if (cell === 'X') xCount++;
        }
    }

    if (xCount > oCount || oCount > xCount + 1) return 0;

    let oWins = isWinner('O');
    let xWins = isWinner('X');

    if (oWins && xWins) return 0;
    if (oWins && oCount !== xCount + 1) return 0;
    if (xWins && oCount !== xCount) return 0;

    return 1;
}

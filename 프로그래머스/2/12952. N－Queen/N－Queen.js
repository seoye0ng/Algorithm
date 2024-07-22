function solution(n) {
    let count = 0;

    function isValid(board, row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i] === col || 
                board[i] - i === col - row || 
                board[i] + i === col + row) {
                return false;
            }
        }
        return true;
    }

    function solve(board, row) {
        if (row === n) {
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row] = col;
                solve(board, row + 1);
                board[row] = -1;
            }
        }
    }

    solve(new Array(n).fill(-1), 0);
    return count;
}

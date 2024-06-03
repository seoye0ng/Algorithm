function solution(board) {
    let maxSide = 0;
    let rows = board.length;
    let cols = board[0].length;

    // DP 배열 초기화
    let dp = Array.from(Array(rows), () => Array(cols).fill(0));

    // 초기화 및 최대값 갱신
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = board[i][j];
            } else if (board[i][j] === 1) {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
            }
            if (dp[i][j] > maxSide) {
                maxSide = dp[i][j];
            }
        }
    }

    // 넓이를 반환
    return maxSide * maxSide;
}
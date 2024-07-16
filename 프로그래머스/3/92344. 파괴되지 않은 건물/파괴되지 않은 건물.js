function solution(board, skill) {
    const n = board.length;
    const m = board[0].length;

    // 누적합 배열 생성
    const prefixSum = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    // 스킬 적용
    for (const [type, r1, c1, r2, c2, degree] of skill) {
        const impact = type === 1 ? -degree : degree;
        prefixSum[r1][c1] += impact;
        prefixSum[r1][c2 + 1] -= impact;
        prefixSum[r2 + 1][c1] -= impact;
        prefixSum[r2 + 1][c2 + 1] += impact;
    }

    // 누적합 계산 (행 기준)
    for (let i = 0; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            prefixSum[i][j] += prefixSum[i][j - 1];
        }
    }

    // 누적합 계산 (열 기준)
    for (let j = 0; j <= m; j++) {
        for (let i = 1; i <= n; i++) {
            prefixSum[i][j] += prefixSum[i - 1][j];
        }
    }

    // 결과 적용 및 파괴되지 않은 건물 카운트
    let intactCount = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            board[i][j] += prefixSum[i][j];
            if (board[i][j] > 0) {
                intactCount++;
            }
        }
    }

    return intactCount;
}


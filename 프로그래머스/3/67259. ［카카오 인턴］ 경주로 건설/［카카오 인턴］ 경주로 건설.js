function solution(board) {
    const N = board.length;
    const directions = [
        [-1, 0], // 위
        [1, 0],  // 아래
        [0, -1], // 왼쪽
        [0, 1]   // 오른쪽
    ];

    // BFS를 위한 큐
    const queue = [];
    // 최소 비용 저장을 위한 3차원 배열 (x, y, 방향)
    const cost = Array.from({ length: N }, () => Array.from({ length: N }, () => Array(4).fill(Infinity)));

    // 초기 설정: 시작점에서 각 방향으로의 비용
    for (let i = 0; i < 4; i++) {
        const [dx, dy] = directions[i];
        const nx = dx, ny = dy;
        if (nx >= 0 && nx < N && ny >= 0 && ny < N && board[nx][ny] === 0) {
            cost[0][0][i] = 100;
            queue.push([nx, ny, i, 100]);
        }
    }

    while (queue.length > 0) {
        const [x, y, dir, curCost] = queue.shift();

        for (let i = 0; i < directions.length; i++) {
            const [dx, dy] = directions[i];
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < N && ny >= 0 && ny < N && board[nx][ny] === 0) {
                const nextCost = curCost + 100 + (dir !== i ? 500 : 0);

                if (nextCost < cost[nx][ny][i]) {
                    cost[nx][ny][i] = nextCost;
                    queue.push([nx, ny, i, nextCost]);
                }
            }
        }
    }

    return Math.min(...cost[N-1][N-1]);
}

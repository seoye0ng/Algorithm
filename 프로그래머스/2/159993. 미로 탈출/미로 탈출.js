function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const bfs = (start, end) => {
        const [startX, startY] = start;
        const [endX, endY] = end;
        const queue = [[startX, startY, 0]];
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
        visited[startX][startY] = true;

        while (queue.length > 0) {
            const [x, y, dist] = queue.shift();

            if (x === endX && y === endY) {
                return dist;
            }

            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;

                if (
                    newX >= 0 &&
                    newY >= 0 &&
                    newX < rows &&
                    newY < cols &&
                    maps[newX][newY] !== 'X' &&
                    !visited[newX][newY]
                ) {
                    visited[newX][newY] = true;
                    queue.push([newX, newY, dist + 1]);
                }
            }
        }

        return -1; // 경로를 찾을 수 없음
    };

    let start, lever, exit;

    // 시작 지점(S), 레버(L), 출구(E)의 위치를 찾음
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maps[i][j] === 'S') start = [i, j];
            if (maps[i][j] === 'L') lever = [i, j];
            if (maps[i][j] === 'E') exit = [i, j];
        }
    }

    const startToLever = bfs(start, lever);
    const leverToExit = bfs(lever, exit);

    if (startToLever === -1 || leverToExit === -1) {
        return -1;
    }

    return startToLever + leverToExit;
}
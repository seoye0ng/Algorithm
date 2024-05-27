function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상, 하, 좌, 우
    const results = [];

    const isValid = (x, y) => x >= 0 && x < rows && y >= 0 && y < cols && maps[x][y] !== 'X' && !visited[x][y];

    const bfs = (startX, startY) => {
        let queue = [[startX, startY]];
        visited[startX][startY] = true;
        let totalFood = 0;

        while (queue.length > 0) {
            const [x, y] = queue.shift();
            totalFood += parseInt(maps[x][y]);

            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;
                if (isValid(newX, newY)) {
                    visited[newX][newY] = true;
                    queue.push([newX, newY]);
                }
            }
        }

        return totalFood;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maps[i][j] !== 'X' && !visited[i][j]) {
                const food = bfs(i, j);
                results.push(food);
            }
        }
    }

    return results.length > 0 ? results.sort((a, b) => a - b) : [-1];
}
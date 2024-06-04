function solution(rows, columns, queries) {
    const matrix = Array.from({ length: rows }, (_, i) => Array.from({ length: columns }, (_, j) => i * columns + j + 1));

    const minValues = [];
    for (const [x1, y1, x2, y2] of queries) {
        const queue = [];
        for (let j = y1 - 1; j < y2; j++) queue.push(matrix[x1 - 1][j]);
        for (let i = x1; i < x2; i++) queue.push(matrix[i][y2 - 1]);
        for (let j = y2 - 2; j >= y1 - 1; j--) queue.push(matrix[x2 - 1][j]);
        for (let i = x2 - 2; i >= x1; i--) queue.push(matrix[i][y1 - 1]);

        queue.unshift(queue.pop());
        minValues.push(Math.min(...queue));
        
        let index = 0;
        for (let j = y1 - 1; j < y2; j++) matrix[x1 - 1][j] = queue[index++];
        for (let i = x1; i < x2; i++) matrix[i][y2 - 1] = queue[index++];
        for (let j = y2 - 2; j >= y1 - 1; j--) matrix[x2 - 1][j] = queue[index++];
        for (let i = x2 - 2; i >= x1; i--) matrix[i][y1 - 1] = queue[index++];
    }

    return minValues;
}

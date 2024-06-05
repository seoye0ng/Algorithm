function solution(park, routes) {
    const numRows = park.length;
    const numCols = park[0].length;
    let startRow, startCol;

    // 시작 위치 찾기
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (park[i][j] === 'S') {
                startRow = i;
                startCol = j;
                break;
            }
        }
    }

    // 방향 매핑
    const directions = {
        'N': [-1, 0],
        'S': [1, 0],
        'W': [0, -1],
        'E': [0, 1]
    };

    let currentRow = startRow;
    let currentCol = startCol;

    // 각 명령 처리
    for (const route of routes) {
        const [dir, stepsStr] = route.split(' ');
        const steps = parseInt(stepsStr, 10);
        const [dRow, dCol] = directions[dir];

        let nextRow = currentRow;
        let nextCol = currentCol;
        let validMove = true;

        // 경로 확인
        for (let i = 1; i <= steps; i++) {
            nextRow += dRow;
            nextCol += dCol;

            if (nextRow < 0 || nextRow >= numRows || nextCol < 0 || nextCol >= numCols || park[nextRow][nextCol] === 'X') {
                validMove = false;
                break;
            }
        }

        // 유효한 이동일 경우 위치 업데이트
        if (validMove) {
            currentRow = nextRow;
            currentCol = nextCol;
        }
    }

    return [currentRow, currentCol];
}

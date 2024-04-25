function solution(m, n, board) {
    let answer = 0;
    const newBoard = board.map(row => row.split(''));

    while (true) {
        const blocks = new Set();
        
        // 2x2 형태로 같은 모양의 블록이 있는지 확인
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const current = newBoard[i][j];
                if (current === ' ') continue; // 이미 지워진 블록은 확인하지 않음
                if (current === newBoard[i][j + 1] &&
                    current === newBoard[i + 1][j] &&
                    current === newBoard[i + 1][j + 1]) {
                    blocks.add(`${i},${j}`);
                    blocks.add(`${i},${j + 1}`);
                    blocks.add(`${i + 1},${j}`);
                    blocks.add(`${i + 1},${j + 1}`);
                }
            }
        }

        // 더 이상 지워질 블록이 없을 경우 종료
        if (blocks.size === 0) break;

        // 지워진 블록의 개수를 증가시키고, 해당 블록들을 공백으로 표시
        answer += blocks.size;
        blocks.forEach(block => {
            const [x, y] = block.split(',').map(Number);
            newBoard[x][y] = ' ';
        });

        // 블록을 지우고 빈 공간을 채움
        for (let i = m - 1; i >= 0; i--) {
            for (let j = 0; j < n; j++) {
                if (newBoard[i][j] === ' ') {
                    for (let k = i - 1; k >= 0; k--) {
                        if (newBoard[k][j] !== ' ') {
                            newBoard[i][j] = newBoard[k][j];
                            newBoard[k][j] = ' ';
                            break;
                        }
                    }
                }
            }
        }
    }

    return answer;
}
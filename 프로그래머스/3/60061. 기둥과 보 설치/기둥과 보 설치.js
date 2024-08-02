function solution(n, build_frame) {
    const structures = new Set();

    function canBuild() {
        for (const item of structures) {
            const [x, y, stuff] = item.split(',').map(Number);
            if (stuff === 0) { // 기둥
                if (y === 0 || structures.has(`${x},${y-1},0`) || structures.has(`${x-1},${y},1`) || structures.has(`${x},${y},1`)) {
                    continue;
                }
                return false;
            } else if (stuff === 1) { // 보
                if (structures.has(`${x},${y-1},0`) || structures.has(`${x+1},${y-1},0`) || (structures.has(`${x-1},${y},1`) && structures.has(`${x+1},${y},1`))) {
                    continue;
                }
                return false;
            }
        }
        return true;
    }

    for (const [x, y, a, b] of build_frame) {
        if (b === 1) { // 설치
            structures.add(`${x},${y},${a}`);
            if (!canBuild()) {
                structures.delete(`${x},${y},${a}`);
            }
        } else { // 삭제
            structures.delete(`${x},${y},${a}`);
            if (!canBuild()) {
                structures.add(`${x},${y},${a}`);
            }
        }
    }

    const result = [...structures].map(item => item.split(',').map(Number));
    result.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);

    return result;
}
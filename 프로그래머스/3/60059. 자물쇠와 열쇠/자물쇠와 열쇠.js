function rotateKey(key) {
    const M = key.length;
    const rotated = Array.from({ length: M }, () => Array(M).fill(0));
    for (let r = 0; r < M; r++) {
        for (let c = 0; c < M; c++) {
            rotated[c][M - 1 - r] = key[r][c];
        }
    }
    return rotated;
}

function canUnlock(expandedLock, key, x, y, offset, lockSize) {
    const M = key.length;
    const N = lockSize;
    const expandedSize = 2 * offset + N;

    // Copy expandedLock to tempLock to avoid changing the original
    const tempLock = expandedLock.map(row => row.slice());

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < M; j++) {
            if (x + i >= 0 && x + i < expandedSize && y + j >= 0 && y + j < expandedSize) {
                tempLock[x + i][y + j] += key[i][j];
            }
        }
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (tempLock[offset + i][offset + j] !== 1) {
                return false;
            }
        }
    }
    return true;
}

function solution(key, lock) {
    const M = key.length;
    const N = lock.length;
    const offset = M - 1;
    const expandedSize = N + 2 * offset;
    const expandedLock = Array.from({ length: expandedSize }, () => Array(expandedSize).fill(0));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            expandedLock[offset + i][offset + j] = lock[i][j];
        }
    }

    for (let rotation = 0; rotation < 4; rotation++) {
        for (let x = -offset; x <= offset + N - 1; x++) {
            for (let y = -offset; y <= offset + N - 1; y++) {
                if (canUnlock(expandedLock, key, x, y, offset, N)) {
                    return true;
                }
            }
        }
        key = rotateKey(key);
    }

    return false;
}
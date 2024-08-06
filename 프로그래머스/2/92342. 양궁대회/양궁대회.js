function solution(n, info) {
    let maxDiff = 0;
    let bestShot = [-1];

    function dfs(remainingArrows, idx, lionInfo) {
        if (idx === 11) {
            if (remainingArrows > 0) {
                lionInfo[10] += remainingArrows;  // 남은 화살을 0점에 배치
            }

            let lionScore = 0;
            let apeachScore = 0;

            for (let i = 0; i < 11; i++) {
                if (lionInfo[i] > info[i]) {
                    lionScore += 10 - i;
                } else if (info[i] > 0) {
                    apeachScore += 10 - i;
                }
            }

            const diff = lionScore - apeachScore;
            if (diff > 0) {
                if (diff > maxDiff || (diff === maxDiff && isBetter(lionInfo, bestShot))) {
                    maxDiff = diff;
                    bestShot = lionInfo.slice();
                }
            }

            if (remainingArrows > 0) {
                lionInfo[10] -= remainingArrows;  // 원래 상태로 복구
            }
            return;
        }

        // 라이언이 이 점수대를 이기는 경우
        if (remainingArrows > info[idx]) {
            lionInfo[idx] = info[idx] + 1;
            dfs(remainingArrows - lionInfo[idx], idx + 1, lionInfo);
            lionInfo[idx] = 0;  // 원래 상태로 복구
        }

        // 라이언이 이 점수대를 포기하는 경우
        dfs(remainingArrows, idx + 1, lionInfo);
    }

    function isBetter(arr1, arr2) {
        for (let i = 10; i >= 0; i--) {
            if (arr1[i] > arr2[i]) return true;
            if (arr1[i] < arr2[i]) return false;
        }
        return false;
    }

    dfs(n, 0, Array(11).fill(0));

    return bestShot;
}

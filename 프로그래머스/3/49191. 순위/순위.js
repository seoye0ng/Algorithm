function solution(n, results) {
    // 그래프 초기화
    const win = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
    
    // 주어진 결과로 그래프 채우기
    results.forEach(([winner, loser]) => {
        win[winner][loser] = true;
    });
    
    // 플로이드-와샬 알고리즘 적용하여 간접 승리 관계 찾기
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (win[i][k] && win[k][j]) {
                    win[i][j] = true;
                }
            }
        }
    }
    
    // 정확한 순위를 가질 수 있는 선수의 수를 결정
    let count = 0;
    for (let i = 1; i <= n; i++) {
        let definiteRank = true;
        for (let j = 1; j <= n; j++) {
            if (i === j) continue;
            if (!win[i][j] && !win[j][i]) {
                definiteRank = false;
                break;
            }
        }
        if (definiteRank) count++;
    }
    
    return count;
}
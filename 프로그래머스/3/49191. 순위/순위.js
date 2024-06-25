function solution(n, results) {
    const win = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
    
    results.forEach(([winner, loser]) => {
        win[winner][loser] = true;
    });
    
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (win[i][k] && win[k][j]) {
                    win[i][j] = true;
                }
            }
        }
    }
    
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
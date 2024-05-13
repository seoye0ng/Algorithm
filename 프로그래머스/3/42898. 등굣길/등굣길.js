function solution(m, n, puddles) {
    const MOD = 1000000007;
    const puddleSet = new Set(puddles.map(([x, y]) => `${x},${y}`));
    const dp = Array(n).fill(0);
    dp[0] = 1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;
            if (puddleSet.has(`${i + 1},${j + 1}`)) {
                dp[j] = 0;
            } else {
                dp[j] = (dp[j] + (j > 0 ? dp[j - 1] : 0)) % MOD;
            }
        }
    }

    return dp[n - 1];
}

function solution(n, money) {
    const MOD = 1000000007;
    const dp = Array(n + 1).fill(0);
    dp[0] = 1; // 0원을 만드는 방법은 1가지

    // 각 화폐 단위에 대해 dp 배열을 갱신
    for (let m of money) {
        for (let i = m; i <= n; i++) {
            dp[i] = (dp[i] + dp[i - m]) % MOD;
        }
    }

    return dp[n];
}

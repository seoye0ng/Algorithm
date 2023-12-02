function solution(n) {
    const MOD = 1234567;
    const fibo = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibo[i] = (fibo[i - 1] + fibo[i - 2]) % MOD;
    }

    return fibo[n];
}
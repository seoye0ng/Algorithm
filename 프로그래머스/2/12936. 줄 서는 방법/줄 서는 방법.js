function solution(n, k) {
    let factorial = [1];
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }

    k--; // 0-indexed로 변환

    const numbers = Array.from({ length: n }, (_, i) => i + 1);
    const result = [];

    for (let i = n; i > 0; i--) {
        const idx = Math.floor(k / factorial[i - 1]);
        result.push(numbers[idx]);
        numbers.splice(idx, 1);
        k %= factorial[i - 1];
    }

    return result;
}

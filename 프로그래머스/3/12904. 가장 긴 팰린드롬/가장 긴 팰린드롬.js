function solution(s) {
    const n = s.length;
    if (n < 2) return n;

    // DP 테이블 초기화
    const dp = Array.from(Array(n), () => Array(n).fill(false));
    let maxLength = 1;

    // 모든 길이가 1인 문자열은 팰린드롬
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    // 길이가 2인 문자열 검사
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            maxLength = 2;
        }
    }

    // 길이가 3 이상인 문자열 검사
    for (let length = 3; length <= n; length++) {
        for (let i = 0; i <= n - length; i++) {
            const j = i + length - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                maxLength = length;
            }
        }
    }

    return maxLength;
}
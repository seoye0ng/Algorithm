function solution(land) {
    const N = land.length;
    
    // 각 행의 열 별로 최대 점수를 저장하기 위한 배열
    const dp = Array.from(Array(N), () => Array(4).fill(0));
    
    // 첫 번째 행의 점수는 그대로 저장
    dp[0] = land[0];
    
    // 두 번째 행부터 시작하여, 이전 행에서 선택한 열을 제외한 나머지 열 중 최대 점수를 현재 행에 더함
    for (let i = 1; i < N; i++) {
        for (let j = 0; j < 4; j++) {
            let max = 0;
            for (let k = 0; k < 4; k++) {
                if (j !== k) {
                    max = Math.max(max, dp[i - 1][k]);
                }
            }
            dp[i][j] = max + land[i][j];
        }
    }
    
    // 마지막 행에서 최대 점수를 반환
    return Math.max(...dp[N - 1]);
}
function solution(n) {
    // 에라토스테네스의 체를 위한 배열 초기화
    const sieve = Array(n + 1).fill(true);
    
    // 0과 1은 소수가 아니므로 false로 설정
    sieve[0] = sieve[1] = false;

    // 2부터 n의 제곱근까지 반복
    for (let i = 2; i * i <= n; i++) {
        // 현재 숫자가 소수인 경우
        if (sieve[i]) {
            // 현재 숫자의 배수들을 모두 소수가 아닌 것으로 표시
            for (let j = i * i; j <= n; j += i) {
                sieve[j] = false;
            }
        }
    }

    // 배열에서 true인 값(소수)의 개수를 반환
    return sieve.filter((isPrime) => isPrime).length;
}

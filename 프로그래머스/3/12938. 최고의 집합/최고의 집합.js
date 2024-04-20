function solution(n, s) {
    // 결과를 담을 배열 초기화
    let answer = [];

    // 주어진 합을 최대한 고른 분배로 채우기
    const quotient = Math.floor(s / n);
    const remainder = s % n;

    // 주어진 합이 집합의 원소 수보다 작거나 같으면 최고의 집합이 존재하지 않음
    if (quotient === 0) {
        return [-1];
    }

    // 가장 큰 수부터 채워넣기
    for (let i = 0; i < n; i++) {
        if (i < n - remainder) {
            answer.push(quotient);
            continue;
        }
        answer.push(quotient + 1);
    }

    return answer;
}
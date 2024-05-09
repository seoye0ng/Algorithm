function solution(n) {
    let answer = '';
    while (n > 0) {
        // n을 3으로 나눈 나머지
        let remainder = n % 3;
        // 3으로 나눈 몫이 0이면 4를 추가하고 몫을 1 감소
        if (remainder === 0) {
            answer = '4' + answer;
            n = Math.floor(n / 3) - 1;
        } else {
            // 나머지가 0이 아니면 그대로 answer에 추가 n을 3으로 나눔
            answer = remainder + answer;
            n = Math.floor(n / 3);
        }
    }
    return answer;
}

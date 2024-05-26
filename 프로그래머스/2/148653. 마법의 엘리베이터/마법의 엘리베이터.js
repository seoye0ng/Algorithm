function solution(storey) {
    let steps = 0;

    while (storey > 0) {
        let digit = storey % 10;  // 현재 자리수의 숫자
        let nextDigit = Math.floor(storey / 10) % 10;  // 다음 자리수의 숫자

        if (digit > 5 || (digit == 5 && nextDigit >= 5)) {
            steps += 10 - digit;
            storey += 10 - digit;
        } else {
            steps += digit;
        }

        storey = Math.floor(storey / 10);
    }

    return steps;
}


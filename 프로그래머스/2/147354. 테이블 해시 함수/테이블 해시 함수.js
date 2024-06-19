function solution(data, col, row_begin, row_end) {
    // 1. 데이터 정렬
    data.sort((a, b) => {
        if (a[col - 1] === b[col - 1]) {
            return b[0] - a[0];  // 기본 키 기준 내림차순
        }
        return a[col - 1] - b[col - 1];  // 주어진 열 기준 오름차순
    });

    // 2. S_i 계산 및 XOR 연산
    let hashValue = 0;

    for (let i = row_begin; i <= row_end; i++) {
        let S_i = data[i - 1].reduce((sum, val) => sum + (val % i), 0);
        hashValue ^= S_i;
    }

    return hashValue;
}
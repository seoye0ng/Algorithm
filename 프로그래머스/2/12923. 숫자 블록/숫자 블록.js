function solution(begin, end) {
    const size = end - begin + 1;
    const result = Array(size).fill(0);
    
    // 범위 내에서 각 위치의 블록 번호 계산
    for (let i = begin; i <= end; i++) {
        if (i === 1) continue;
        
        let largestDivisor = 1;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                if (i / j <= 10000000) {
                    largestDivisor = i / j;
                    break;
                }
                largestDivisor = j;
            }
        }
        result[i - begin] = largestDivisor;
    }
    
    return result;
}
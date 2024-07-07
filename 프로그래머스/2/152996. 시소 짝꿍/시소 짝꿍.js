function solution(weights) {
    const frequency = {};
    let count = 0;

    // 몸무게 빈도수 계산
    for (const weight of weights) {
        frequency[weight] = (frequency[weight] || 0) + 1;
    }

    // 시소 짝꿍 쌍 계산
    for (const weight of weights) {
        frequency[weight] -= 1;
        if (frequency[weight] === 0) delete frequency[weight];

        // 각 비율에 대한 상대 몸무게 계산 및 쌍 추가
        const pairs = [1, 2/3, 2/4, 3/4];
        for (const pair of pairs) {
            const targetWeight = weight * pair;
            if (frequency[targetWeight]) {
                count += frequency[targetWeight];
            }
            // 반대 비율도 고려
            if (pair !== 1) {
                const inverseWeight = weight / pair;
                if (frequency[inverseWeight]) {
                    count += frequency[inverseWeight];
                }
            }
        }
    }

    return count;
}
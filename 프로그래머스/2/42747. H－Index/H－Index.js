function solution(citations) {
    citations.sort((a, b) => b - a); // 내림차순으로 정렬

    let hIndex = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            hIndex = i + 1;
        } else {
            break;
        }
    }

    return hIndex;
}
function solution(topping) {
    const leftSet = new Set();
    const rightCount = new Map();

    // 오른쪽 조각의 토핑 종류 초기화
    for (const top of topping) {
        rightCount.set(top, (rightCount.get(top) || 0) + 1);
    }

    let fairCuts = 0;

    for (const top of topping) {
        // 왼쪽 조각에 현재 토핑 추가
        leftSet.add(top);
        // 오른쪽 조각에서 현재 토핑 제거
        rightCount.set(top, rightCount.get(top) - 1);
        if (rightCount.get(top) === 0) {
            rightCount.delete(top);
        }

        // 각 조각의 토핑 종류 수가 같은지 확인
        if (leftSet.size === rightCount.size) {
            fairCuts++;
        }
    }

    return fairCuts;
}
function solution(gems) {
    const reqGems = new Set(gems).size;
    const gemMap = new Map();
    let startIdx = 0;
    let endIdx = 0;
    let answer = [0, gems.length - 1];

    while(endIdx < gems.length) {
        if(!gemMap.has(gems[endIdx])) {
            gemMap.set(gems[endIdx], 1);
        } else {
            gemMap.set(gems[endIdx], gemMap.get(gems[endIdx]) + 1);
        }

        while(gemMap.size === reqGems) {
            if(endIdx - startIdx < answer[1] - answer[0]) {
                answer = [startIdx, endIdx];
            }
            if(gemMap.get(gems[startIdx]) === 1) {
                gemMap.delete(gems[startIdx]);
            } else {
                gemMap.set(gems[startIdx], gemMap.get(gems[startIdx]) - 1);
            }
            startIdx++;
        }
        endIdx++;
    }

    return [answer[0] + 1, answer[1] + 1];
}

function solution(relation) {
    const rowCount = relation.length;
    const colCount = relation[0].length;

    // 모든 조합을 검사하기 위해 최대 2^colCount 조합을 확인
    const combinations = (1 << colCount) - 1;

    const uniqueKeys = [];

    for (let i = 1; i <= combinations; i++) {
        const set = new Set();
        for (let row = 0; row < rowCount; row++) {
            let key = '';
            for (let col = 0; col < colCount; col++) {
                if (i & (1 << col)) {
                    key += relation[row][col] + ',';
                }
            }
            set.add(key);
        }
        
        if (set.size === rowCount) {  // 유일성을 만족하는지 검사
            let isMinimal = true;
            for (const uniqueKey of uniqueKeys) {
                if ((uniqueKey & i) === uniqueKey) {  // 최소성을 검사
                    isMinimal = false;
                    break;
                }
            }
            if (isMinimal) {
                uniqueKeys.push(i);
            }
        }
    }

    return uniqueKeys.length;
}

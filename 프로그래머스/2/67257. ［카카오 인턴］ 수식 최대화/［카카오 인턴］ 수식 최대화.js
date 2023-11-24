function solution(expression) {
    const answer = [];
    const numbers = expression.split(/[\+\-\*]/g);  // 정규 표현식을 사용하여 연산자를 기준으로 문자열 분리
    const operators = expression.match(/[\+\-\*]/g);  // 정규 표현식을 사용하여 연산자만 추출
    const operatorsSet = [...new Set(operators)];
    // 가능한 모든 조합을 operatorsRank 배열에 저장
    const operatorsRank = getPermutations([...new Set(operators)], operatorsSet.length);
    operatorsRank.forEach((rank) => {
        let tmpNumbers = [...numbers];
        let tmpOperators = [...operators];
        rank.forEach((operator) => {
            // 현재 순위의 연산자가 tmpOperators 배열에 남아있는 동안 반복 수행
            while (tmpOperators.includes(operator)) {
                const renkIdx = tmpOperators.indexOf(operator);
                tmpNumbers[renkIdx] = calculration(operator, tmpNumbers[renkIdx], tmpNumbers[renkIdx + 1]);
                // 계산에 사용된 숫자와 연산자를 배열에서 제거
                tmpNumbers.splice(renkIdx + 1, 1);
                tmpOperators.splice(renkIdx, 1);
            }
        });
        
        answer.push(Math.abs(tmpNumbers[0]));
    });
    
    return Math.max(...answer);
}

function calculration(Operator, num1, num2) {
    if (Operator === '*') return Number(num1) * Number(num2);
    if (Operator === '+') return Number(num1) + Number(num2);
    if (Operator === '-') return Number(num1) - Number(num2);
}

function getPermutations(arr, size) {
    const result = [];
    if (size === 1) return arr.map((value) => [value]);
    arr.forEach((value, index, array) => {
        const rest = [...array.slice(0, index), ...array.slice(index + 1)];
        const permutations = getPermutations(rest, size - 1);
        const attached = permutations.map((permutation) => [value, ...permutation]);

        result.push(...attached);
    });
    
    return result;
}
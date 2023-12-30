function solution(numbers) {
    const sortedNumbers = numbers.map(num => num.toString())
                                  .sort((a, b) => (b + a) - (a + b));
    /* sort 함수를 사용하여 문자열을 기반으로 정렬 
    정렬 로직은 (b + a) - (a + b)를 기준으로 함
    (b + a)는 문자열을 이어붙여서 만든 수를 나타내고, (a + b)는 다른 순서로 이어붙여 만든 수를 나타냄
    이 둘을 비교하여 정렬하면, 큰 수가 앞에 위치하도록 정렬
    예를 들어, b=3, a=30이라고 하면, (b + a)는 "330", (a + b)는 "303"이 되고, "330"이 "303"보다 크므로 "330"이 앞으로 정렬 */
    
    // 모든 숫자가 0인 경우 '0'으로 반환
    if (sortedNumbers[0] === '0') {
        return '0';
    }
    
    return sortedNumbers.join('');
}
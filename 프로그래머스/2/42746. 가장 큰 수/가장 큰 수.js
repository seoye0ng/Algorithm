function solution(numbers) {
    const sortedNumbers = numbers.map(num => num.toString())
                                  .sort((a, b) => (b + a) - (a + b));
    
    // 모든 숫자가 0인 경우 '0'으로 반환
    if (sortedNumbers[0] === '0') {
        return '0';
    }
    
    return sortedNumbers.join('');
}
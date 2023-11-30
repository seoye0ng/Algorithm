function solution(number, k) {
    const stack = [];
    
    for (let i = 0; i < number.length; i++) {
        const currentDigit = number[i];
        
        // 스택에 있는 숫자 중 현재 숫자보다 작은 숫자를 모두 제거
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < currentDigit) {
            stack.pop();
            k--;
        }
        
        // 현재 숫자를 스택에 추가
        stack.push(currentDigit);
    }
    
    // 남은 자릿수 중에서 큰 숫자를 뒤에서부터 제거
    while (k > 0) {
        stack.pop();
        k--;
    }
    
    return stack.join('');
}
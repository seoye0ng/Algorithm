function solution(numbers) {
    const answer = [];
    const stack = [];
    
    for (let i = numbers.length - 1; i >= 0; i--) {
        while (stack.length > 0 && numbers[i] >= stack[stack.length - 1]) {
            stack.pop();
        }

        if (stack.length === 0) {
            answer[i] = -1;
        } else {
            answer[i] = stack[stack.length - 1];
        }

        stack.push(numbers[i]);
    }
    
    return answer;
}
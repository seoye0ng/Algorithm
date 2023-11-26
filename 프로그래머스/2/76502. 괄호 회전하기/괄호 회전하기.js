function solution(s) {
    let answer = s.length;
    let stack = [];
    const openBrackets = ['[', '(', '{'];
    const str = s.split('');

    for (let i = str.length - 1; i >= 0; i--) {
        const idx = str.pop();
        str.unshift(idx);

        for (let j = 0; j < str.length; j++) {
            if (openBrackets.includes(str[j])) {
                stack.push(str[j]);
            } else {
                if (j === 0 || stack.length === 0) {
                    answer--;
                    break;
                } else if (stack[stack.length - 1] === '(' && str[j] === ')') {
                    stack.pop();
                } else if (stack[stack.length - 1] === '[' && str[j] === ']') {
                    stack.pop();
                } else if (stack[stack.length - 1] === '{' && str[j] === '}') {
                    stack.pop();
                }
            }
        }
        if (stack.length !== 0) answer--;
        stack = [];
    }

    return answer;
}

function solution(s) {
    let answer = s.length;
    const brackets = {'[':']', '(':')', '{':'}'};
    const str = s.split('');

    for (let i = 0; i < str.length; i++) {
        const stack = [];
        const idx = str.pop();
        str.unshift(idx);

        for (let j = 0; j < str.length; j++) {
            if (brackets.hasOwnProperty(str[j])) stack.push(str[j]);
            else {
                const bracket = stack[stack.length - 1];
                if (j === 0 || stack.length === 0 || brackets[bracket] !== str[j]) {
                    answer--;
                    break;
                } else stack.pop();
            }
            
            if (j === str.length - 1 && stack.length !== 0) answer--;
        }
    }

    return answer;
}
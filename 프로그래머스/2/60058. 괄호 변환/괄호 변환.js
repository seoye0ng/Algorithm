function isBalanced(s) {
    // 입력 문자열 s가 올바른 괄호 문자열인지 확인
    let count = 0;
    for (let char of s) {
        if (char === '(') count++;
        else count--;
    }
    return count === 0;
}

function isCorrect(s) {
    // 입력 문자열 s가 올바른 괄호 문자열인지 확인
    let stack = [];
    for (let char of s) {
        if (char === '(') {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}

function splitToBalanced(s) {
    // 입력 문자열 s를 두 균형잡힌 부분 문자열 u와 v로 분리
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') count++;
        else count--;
        if (count === 0) return [s.slice(0, i + 1), s.slice(i + 1)];
    }
}

function reverseParentheses(s) {
    // 문자열 s의 괄호 방향을 뒤집기
    return s.split('').map(char => char === '(' ? ')' : '(').join('');
}

function solution(p) {
    // 문자열 p를 올바른 괄호 문자열로 변환
    if (p === '') return '';

    let [u, v] = splitToBalanced(p);

    if (isCorrect(u)) {
        return u + solution(v);
    } else {
        return '(' + solution(v) + ')' + reverseParentheses(u.slice(1, -1));
    }
}
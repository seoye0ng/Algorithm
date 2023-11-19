function solution(s){
    const stack = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            stack.push(s[i])
        } else if(s[i] === ')') {
            if(stack.length > 0) stack.pop(); 
            else return false; // s[0]이 ')'일 경우
        }
    }
    
    return stack.length === 0;
}
function solution(s){
    let stack = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === ')' && stack <= 0) return false;
        if(s[i] === '(') stack++;
        else stack--;
    }
    
    return stack === 0;
}
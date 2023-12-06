function solution(brown, yellow) {
    let answer = [];
    const total = brown + yellow;
     
    for(let i = 3;  i <= total / 2; i++) {
        const row = total / i;
        if(total % i === 0 && row >= i) {
            if((row - 2) * (i - 2) === yellow) answer.push(row, i);
        }
    }
    
    return answer;
}
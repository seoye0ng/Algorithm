function solution(brown, yellow) {
    let answer = [];
    const total = brown + yellow;
     
    for(let i = 3;  i <= total / 2; i++) {
        if(total % i === 0 && total / i >= i) {
            if((total / i - 2) * (i - 2) === yellow) answer = [total / i, i];
        }
    }
    
    return answer;
}
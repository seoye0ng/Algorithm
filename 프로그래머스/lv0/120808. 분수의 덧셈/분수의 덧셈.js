function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    answer.push((numer1 * denom2)+(numer2 * denom1))
    answer.push(denom1 * denom2)
    
    for(let i = answer[1]; i >= 2; i--) {
        if(answer[0] % i == 0 && answer[1] % i == 0) {
            answer[0] = answer[0] / i
            answer[1] = answer[1] / i
        }
    }
    return answer;
}
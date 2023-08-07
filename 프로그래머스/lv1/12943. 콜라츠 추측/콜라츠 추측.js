function solution(num) {
    let answer = 0
    
    while(num !== 1) {
        num % 2 === 0 ? num = num / 2 : num = num * 3 + 1
        if(answer > 500) break;
        answer++;
    }
    
    return answer > 500 ? -1 : answer;
}
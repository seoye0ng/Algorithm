function solution(a, b) {
    let answer = 0;
    
    if(a > b) {
        let num = a
        a = b
        b = num
    }
    
    for(let i = a; i <= b; i++){
        answer += i
    }
    
    return answer;
}
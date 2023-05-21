function solution(a, b) {
    let divisor = [];
    let answer = 0
    
    for(let i = 2; i <= b; i++) {
        if(b % i == 0 && a % i == 0) divisor.push(i)
    }
    
    if(divisor.length == 0) {
      b % 2 == 0 || b % 5 == 0 ? answer = 1 : answer = 2
    } else{
      (b / Math.max(...divisor)) % 2 == 0 || (b / Math.max(...divisor)) % 5 == 0 ? answer = 1 : answer = 2
    }
    return answer
}
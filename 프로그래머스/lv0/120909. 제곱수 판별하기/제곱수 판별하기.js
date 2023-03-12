function solution(n) {
    var answer = 0;
    
    for(let i = 1; i < n/2; i++){
        if(i*i === n){
            answer=1
            break
        } else {
            answer=2
        }
    }
    return answer;
}
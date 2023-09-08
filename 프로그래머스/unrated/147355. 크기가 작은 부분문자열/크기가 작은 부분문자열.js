function solution(t, p) {
    let answer = [];
    
    for(let i = 0; i <= t.length - p.length; i++){
        if(t.slice(i, p.length + i) <= p) answer.push(t.slice(i, p.length + i))
    }
    
    return answer.length
}
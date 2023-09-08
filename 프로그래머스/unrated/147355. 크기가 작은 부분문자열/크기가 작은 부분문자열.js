function solution(t, p) {
    let answer = [];
    
    for(let i = 0; i <= t.length - p.length; i++){
        answer.push(t.slice(i, p.length + i))
    }
    
    return answer.filter((num) => num <= p).length
}
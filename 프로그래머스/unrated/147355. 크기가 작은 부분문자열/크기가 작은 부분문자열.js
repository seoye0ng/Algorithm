function solution(t, p) {
    let answer = [];
    
    for(let i = 0; i <= t.length - p.length; i++){
        const num = t.slice(i, p.length + i)
        answer.push(num)
    }
    
    return answer.filter((num) => num <= p).length
}
function solution(numbers, direction) {
    var answer = numbers;
    
    if( direction == "right"){
        const r = answer.pop()
        answer.unshift(r)
    } else if (direction == "left"){
        const l = answer.shift()
        answer.push(l)
    }
    
    return answer;
}
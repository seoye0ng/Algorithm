function solution(numbers, direction) {
    var answer = numbers;
    
    if( direction == "right") {
        answer.unshift(answer.pop())
    } else if (direction == "left") {
        answer.push(answer.shift())
    }
    
    return answer;
}
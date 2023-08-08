function solution(arr, divisor) {
    let answer = [];
    
    arr.map((num) => num % divisor === 0 && answer.push(num))
    answer.length === 0 ? answer.push(-1) : answer.sort((a,b) => a - b)
    
    return answer;
}

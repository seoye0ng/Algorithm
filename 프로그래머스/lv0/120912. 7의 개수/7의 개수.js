function solution(array) {
    var answer = 0;
    
    array.join('').split('').forEach(i => parseInt(i) == 7 ? answer += 1 : answer += 0)
    
    return answer;
}
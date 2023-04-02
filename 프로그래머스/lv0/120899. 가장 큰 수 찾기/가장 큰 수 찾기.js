function solution(array) {
    let answer = [];
    
    answer[0] = Math.max(...array);
    answer[1] = array.indexOf(answer[0])
    
    return answer;
}
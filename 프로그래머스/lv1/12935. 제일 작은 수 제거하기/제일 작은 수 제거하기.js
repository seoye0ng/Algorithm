function solution(arr) {
    let answer = [];
    
    arr.map(e => e !== Math.min(...arr) && answer.push(e))
    
    return answer.length === 0 ? [-1] : answer;
}
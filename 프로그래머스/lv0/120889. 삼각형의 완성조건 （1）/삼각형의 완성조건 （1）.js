function solution(sides) {
    var answer = 0;
    
    const a = Math.max(...sides);
    for(i of sides) {
        answer += i
    }
    
    return answer - a > a ? 1 : 2;
}
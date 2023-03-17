function solution(my_string) {
    var answer = [...my_string].filter((a) => !isNaN(parseInt(a))).sort((a,b) => a-b);
    
    return answer.map(a => parseInt(a));
}
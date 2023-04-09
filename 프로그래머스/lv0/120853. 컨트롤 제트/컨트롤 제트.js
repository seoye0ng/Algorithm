function solution(s) {
    var answer = 0;
    s = s.split(" ")
    
    for(let i = 0; i < s.length; i++){
       s[i] == 'Z' ? answer -= parseInt(s[i - 1]) : answer += parseInt(s[i])
    }
    
    return answer;
}
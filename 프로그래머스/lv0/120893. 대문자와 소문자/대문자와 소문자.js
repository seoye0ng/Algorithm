function solution(my_string) {
    var answer = '';
    
    for(let i = 0; i < my_string.length; i++) {
        let transString = my_string[i].charCodeAt(0)
        
        if(65 <= transString && transString <= 90) {
            answer += String.fromCodePoint(transString + 32)
        } else {
            answer += String.fromCodePoint(transString - 32)
        }
    }
    return answer;
}
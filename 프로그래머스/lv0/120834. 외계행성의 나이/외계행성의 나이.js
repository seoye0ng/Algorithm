function solution(age) {
    let answer = '';
    let strArr = (age + '').split('')
    
    for(let i of strArr) {
     answer += String.fromCharCode(parseInt(i) + 97);
    }
    
     return answer;
}
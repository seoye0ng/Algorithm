function solution(age) {
    let answer = '';
    let str = age + '';
    let strArr = str.split('')
    
    for(let i of strArr) {
     answer += String.fromCharCode(parseInt(i) + 97);
    }
    
     return answer;
}
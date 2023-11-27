function solution(n, t, m, p) {
    let answer = '';
    const max = t * m - 1;
    const numbers = Array.from({ length: max }, (_, i) => i)
    const changeNumbers = numbers.map(num => num.toString(n).toUpperCase()).join('').split('');
    
    for (let i = p - 1; i < changeNumbers.length; i += m) {
        answer += changeNumbers[i];
        if (answer.length === t) break;
    }
    
    return answer;
}
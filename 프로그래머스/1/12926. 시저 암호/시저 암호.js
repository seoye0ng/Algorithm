function solution(s, n) {
    let answer = s.split('').map((char) => {
        if (char !== ' ') {
            let isLowerCase = char === char.toLowerCase();
            let start = isLowerCase ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            let charCode = char.charCodeAt(0);
            let shiftedCharCode = (charCode - start + n) % 26 + start;
            return String.fromCharCode(shiftedCharCode);
        }
        return ' ';
    }).join('');
    
    return answer;
}
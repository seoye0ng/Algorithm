function solution(s) {
    let answer = 0;
    let firstLetter = s[0];
    let otherLetter = '';
    
    for(let i = 1; i <= s.length; i++) {
        if(i === s.length && firstLetter.length !== otherLetter.length) {
            answer += 1;
        } 
        if (firstLetter.length === otherLetter.length) {
                answer += 1;
                firstLetter = s[i];
                otherLetter = '';
        } else {
            if(firstLetter[0] === s[i]) {
                firstLetter += s[i];
            } else {
                otherLetter += s[i];
            }
        }
    }
    return answer;
}
function solution(s) {
    let answer = 0;
    let firstLetter = 0;
    let count = 0;
    
    for(let i = 0; i < s.length; i++){
        if(count === 0){
            answer++;
            firstLetter = s[i]
            count++
        } else {
            if(s[i] !== firstLetter) count--;
            else count++;
        }
    }
    
    return answer;
}
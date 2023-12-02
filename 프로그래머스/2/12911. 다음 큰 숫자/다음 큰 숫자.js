function solution(n) {
    const num = n.toString(2).split('').filter(e => e === '1').length
    let answer = 0;
    
    let i = 1;
    while(i > 0) {
        const nextNum = (n + i).toString(2).split('').filter(e => e === '1').length;
        if(nextNum === num) {
            answer = n + i;
            break;
        }
        i++;
    }
    
    return answer;
}
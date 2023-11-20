function solution(s) {
    const answer = [0, 0];
    let sArr = s.split('');
    
    while(sArr.length !== 1){
        const onesLength = sArr.filter(num => num === '1').length;
        answer[1] += sArr.length - onesLength;
        sArr = onesLength.toString(2).split('');
        answer[0] += 1;
    }
    
    return answer;
}
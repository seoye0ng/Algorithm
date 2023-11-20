function solution(s) {
    const answer = [0, 0];
    let sArr = s.split('');
    
    while(sArr.length !== 1){
//         0을 개수를 저장한다.
        const zeroCount = sArr.filter(num => num === '0').length;
        answer[1] += zeroCount;
//         1의 길이를 2진 변환한다.
        sArr = (sArr.length - zeroCount).toString(2).split('');
        answer[0] += 1;
    }
    
    return answer;
}
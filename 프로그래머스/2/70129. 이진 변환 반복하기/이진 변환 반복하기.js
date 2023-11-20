function solution(s) {
    const answer = [0, 0];
    let sArr = s.split('');
    
    while(sArr.length !== 1){
//         s에서 0을 제거한다.
        const ones = sArr.filter(num => num === '1');
//         0의 개수를 저장한다.
        answer[1] += sArr.length - ones.length;
//         ones 길이를 2진 변환한다.
        sArr = ones.length.toString(2).split('');
        answer[0] += 1;
        
    }
    
    return answer;
}
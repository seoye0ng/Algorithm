function solution(s) {
    const answer = [];
    const sArr = s.slice(2, -2).split('},{').map(str => str.split(','));
    const sortArr = sArr.sort((a, b) => a.length - b.length);
    
    sortArr.forEach(num => {
        for(let i = 0; i < num.length; i++){
            if(answer.indexOf(Number(num[i])) === -1){
                answer.push(Number(num[i]))
            }
        }
    })
    
    return answer;
}
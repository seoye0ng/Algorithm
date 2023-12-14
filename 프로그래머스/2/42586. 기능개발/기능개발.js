function solution(progresses, speeds) {
    const answer = [];
    const days = {};
    
    for(let i = 0; i < progresses.length; i++) {
        days[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
    }
    
    let maxDay = days[0];
    let temp = 1;
    
    for(let i = 1; i < progresses.length; i++) {
        if(maxDay >= days[i]) {
            temp++;
        } else {
            maxDay = days[i];
            answer.push(temp);
            temp = 1;
        }
    }
    
    answer.push(temp)
    
    return answer;
}
function solution(progresses, speeds) {
    const answer = [];
    const days = progresses.map((progress, i) => Math.ceil((100 - progresses[i]) / speeds[i]));
    
    let maxDay = days[0];
    let count = 1;
    
    for(let i = 1; i < days.length; i++) {
        if(maxDay >= days[i]) count++;
        else {
            maxDay = days[i];
            answer.push(count);
            count = 1;
        }
    }
    
    answer.push(count);
    
    return answer;
}
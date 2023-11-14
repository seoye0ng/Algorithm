function solution(N, stages) {
    const answer = [];
    let totalUser = stages.length;
    
    for(let i = 1; i <= N; i++){
        const count = stages.filter(stage => {
           return i === stage
        }).length
        answer.push([i, count / totalUser])
        totalUser = totalUser - count;
    }
    
    return answer.sort((a, b) => b[1] - a[1]).map(a => a[0]);
}
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
//     각 원소의 실패율([1]) 순으로 정렬, map으로 각 원소의 [0]만 배열로 생성
    return answer.sort((a, b) => b[1] - a[1]).map(a => a[0]);
}
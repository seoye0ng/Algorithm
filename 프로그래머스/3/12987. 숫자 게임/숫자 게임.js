function solution(A, B) {
    // A와 B를 오름차순으로 정렬
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    let answer = 0;
    
    // A와 B를 순회하면서 A팀의 사원이 B팀의 모든 사원과 비교하여 이길 경우 승점을 획득
    let bIdx = 0;
    for (let a of A) {
        // A팀의 사원이 B팀의 현재 사원보다 큰 경우 승점을 획득하고 B팀의 다음 사원과 매치
        while (bIdx < B.length && a >= B[bIdx]) {
            bIdx++;
        }
        // B팀의 모든 사원을 검사했거나 A팀의 사원이 이긴 경우 더 이상 비교할 필요 없음
        if (bIdx >= B.length) break;
        
        // A팀의 사원이 B팀의 현재 사원보다 작은 경우 승점을 획득
        answer++;
        // B팀의 다음 사원과 매치하기 위해 인덱스 증가
        bIdx++;
    }
    
    return answer;
}
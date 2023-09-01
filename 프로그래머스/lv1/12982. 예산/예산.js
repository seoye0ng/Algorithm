function solution(d, budget) {
    d.sort(((a, b) => a - b)); 
    let count = 0; // 지원 가능한 부서 수를 세는 변수

    for (let i = 0; i < d.length; i++) {
        if (budget >= d[i]) {
            budget -= d[i]; // 현재 부서의 예산을 차감
            count++; // 부서 수 증가
        } else break; 
    }
    return count
}
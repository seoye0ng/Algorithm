function solution(k, ranges) {
    // 1단계: 주어진 k로부터 우박수열 생성
    let hailstone = [k];
    while (k !== 1) {
        if (k % 2 === 0) {
            k = k / 2;
        } else {
            k = 3 * k + 1;
        }
        hailstone.push(k);
    }
    
    // 2단계: 각 구간의 면적(피부적) 계산
    let areas = [];
    for (let i = 0; i < hailstone.length - 1; i++) {
        areas.push((hailstone[i] + hailstone[i + 1]) / 2);
    }

    // 3단계: 주어진 범위(ranges)에 대해 정적분 결과 계산
    let result = [];
    let n = areas.length;
    for (let range of ranges) {
        let [a, b] = range;
        let start = a;
        let end = n + b;
        
        // 시작점이 끝점보다 큰 경우 유효하지 않은 구간으로 간주하고 -1.0 반환
        if (start > end) {
            result.push(-1.0);
        } else {
            let integral = 0;
            // 구간 내의 면적 합산
            for (let i = start; i < end; i++) {
                integral += areas[i];
            }
            result.push(integral);
        }
    }
    
    return result;
}
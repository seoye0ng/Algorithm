function solution(targets) {
    // 구간들을 끝점 기준으로 정렬
    targets.sort((a, b) => a[1] - b[1]);

    let intercepts = 0;
    let lastInterceptPosition = -1;

    for (const [start, end] of targets) {
        // 현재 구간의 시작점이 마지막 요격 위치보다 크면 새로운 요격 미사일 발사 필요
        if (start >= lastInterceptPosition) {
            intercepts++;
            lastInterceptPosition = end;
        }
    }

    return intercepts;
}

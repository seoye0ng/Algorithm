function solution(n, s, a, b, fares) {
    // 무한대를 표현하기 위한 큰 수
    const INF = 100000 * 200 + 1;

    // 그래프 초기화
    const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(INF));
    for (let i = 1; i <= n; i++) graph[i][i] = 0;

    // 주어진 요금 정보를 그래프에 반영
    fares.forEach(([c, d, f]) => {
        graph[c][d] = f;
        graph[d][c] = f;
    });

    // 플로이드-와샬 알고리즘을 사용하여 모든 지점 간 최단 거리 계산
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (graph[i][j] > graph[i][k] + graph[k][j]) {
                    graph[i][j] = graph[i][k] + graph[k][j];
                }
            }
        }
    }

    // 최소 비용 계산
    let minCost = INF;
    for (let t = 1; t <= n; t++) {
        const cost = graph[s][t] + graph[t][a] + graph[t][b];
        if (cost < minCost) {
            minCost = cost;
        }
    }

    return minCost;
}
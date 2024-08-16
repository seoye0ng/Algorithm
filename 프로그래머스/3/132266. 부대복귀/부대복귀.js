function solution(n, roads, sources, destination) {
    const graph = Array.from({ length: n + 1 }, () => []);
    
    // 그래프 생성
    roads.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });

    // BFS를 통해 destination으로부터 각 노드까지의 최단거리를 계산
    const distances = Array(n + 1).fill(-1);
    const queue = [destination];
    distances[destination] = 0;

    while (queue.length) {
        const current = queue.shift();
        const currentDistance = distances[current];

        for (const next of graph[current]) {
            if (distances[next] === -1) {  // 아직 방문하지 않은 노드만
                distances[next] = currentDistance + 1;
                queue.push(next);
            }
        }
    }

    // sources 배열의 각 원소에 대해 distances 값 반환
    return sources.map(source => distances[source]);
}

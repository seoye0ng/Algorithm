function solution(n, vertex) {
    // 그래프를 인접 리스트로 표현
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [a, b] of vertex) {
        graph[a].push(b);
        graph[b].push(a);
    }

    // BFS를 위한 큐와 방문 배열 초기화
    const queue = [1];
    const distances = Array(n + 1).fill(Infinity);
    distances[1] = 0;

    while (queue.length) {
        const current = queue.shift();
        for (const neighbor of graph[current]) {
            if (distances[neighbor] === Infinity) {
                distances[neighbor] = distances[current] + 1;
                queue.push(neighbor);
            }
        }
    }

    // 가장 큰 거리를 찾고, 그 거리의 노드 개수를 셈
    const maxDistance = Math.max(...distances.slice(1));
    const count = distances.filter(distance => distance === maxDistance).length;

    return count;
}
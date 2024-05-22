function solution(N, road, K) {
  // 1. 그래프 생성
  const graph = Array.from({ length: N + 1 }, () => []);
  for (const [a, b, c] of road) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  // 2. 다익스트라 알고리즘을 이용한 최단 경로 탐색
  function dijkstra(start) {
    const dist = Array(N + 1).fill(Infinity);
    dist[start] = 0;
    const pq = [[0, start]];

    while (pq.length > 0) {
      const [d, u] = pq.shift();
      if (d > dist[u]) continue;

      for (const [v, w] of graph[u]) {
        const newDist = dist[u] + w;
        if (newDist < dist[v]) {
          dist[v] = newDist;
          pq.push([newDist, v]);
        }
      }
    }

    return dist;
  }

  // 3. 배달 가능 마을 확인
  const dist = dijkstra(1);
  let answer = 0;
  for (let i = 1; i <= N; i++) {
    if (dist[i] <= K) {
      answer++;
    }
  }

  return answer;
}

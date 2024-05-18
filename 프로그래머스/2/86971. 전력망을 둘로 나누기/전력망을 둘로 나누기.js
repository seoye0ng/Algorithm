function solution(n, wires) {
    // 인접 리스트 생성
    const graph = Array.from({ length: n + 1 }, () => []);
    
    // 그래프를 구성
    for (let [v1, v2] of wires) {
        graph[v1].push(v2);
        graph[v2].push(v1);
    }

    const countNodes = (node, visited) => {
        let count = 1;
        visited[node] = true;
        for (let neighbor of graph[node]) {
            if (!visited[neighbor]) {
                count += countNodes(neighbor, visited);
            }
        }
        return count;
    };

    let minDifference = n;
    
    // 각 전선을 끊어서 두 전력망의 송전탑 개수를 비교
    for (let [v1, v2] of wires) {
        // v1과 v2 사이의 전선을 끊기 위해 v1의 v2 연결 제거 및 v2의 v1 연결 제거
        graph[v1] = graph[v1].filter(neighbor => neighbor !== v2);
        graph[v2] = graph[v2].filter(neighbor => neighbor !== v1);
        
        // v1을 기준으로 하나의 트리 크기 계산
        const visited = Array(n + 1).fill(false);
        const count1 = countNodes(v1, visited);
        const count2 = n - count1;
        
        // 두 전력망의 차이의 절대값 계산
        const difference = Math.abs(count1 - count2);
        minDifference = Math.min(minDifference, difference);
        
        // 끊었던 전선 다시 복구
        graph[v1].push(v2);
        graph[v2].push(v1);
    }
    
    return minDifference;
}
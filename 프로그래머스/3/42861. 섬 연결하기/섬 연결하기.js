function solution(n, costs) {
    // 부모를 저장할 배열 초기화
    const parent = Array.from({ length: n }, (_, index) => index);

    // find 함수: 특정 원소의 최상위 부모를 찾음
    const find = (x) => {
        if (parent[x] === x) return x;
        return parent[x] = find(parent[x]);
    };

    // union 함수: 두 원소를 하나의 집합으로 합침
    const union = (a, b) => {
        const rootA = find(a);
        const rootB = find(b);
        if (rootA !== rootB) {
            parent[rootB] = rootA;
        }
    };

    // 비용을 기준으로 간선을 정렬
    costs.sort((a, b) => a[2] - b[2]);

    let totalCost = 0;
    let edgesUsed = 0;

    for (const [a, b, cost] of costs) {
        if (find(a) !== find(b)) {
            union(a, b);
            totalCost += cost;
            edgesUsed += 1;
            if (edgesUsed === n - 1) break; // 모든 노드를 연결했으면 종료
        }
    }

    return totalCost;
}
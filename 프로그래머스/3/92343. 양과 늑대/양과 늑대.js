function solution(info, edges) {
    const tree = Array.from({ length: info.length }, () => []);
    for (const [parent, child] of edges) {
        tree[parent].push(child);
    }

    let maxSheep = 0;

    function dfs(node, sheep, wolf, visited) {
        if (info[node] === 0) {
            sheep += 1;
        } else {
            wolf += 1;
        }

        if (wolf >= sheep) {
            return;
        }

        maxSheep = Math.max(maxSheep, sheep);

        const nextNodes = [...visited];
        nextNodes.splice(nextNodes.indexOf(node), 1);
        for (const child of tree[node]) {
            nextNodes.push(child);
        }

        for (const next of nextNodes) {
            dfs(next, sheep, wolf, nextNodes);
        }
    }

    dfs(0, 0, 0, [0]);

    return maxSheep;
}
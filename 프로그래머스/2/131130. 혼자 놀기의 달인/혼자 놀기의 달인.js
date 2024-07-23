function solution(cards) {
    const n = cards.length;
    const visited = Array(n).fill(false);
    
    function findGroup(start) {
        let current = start;
        let count = 0;
        
        while (!visited[current]) {
            visited[current] = true;
            current = cards[current] - 1;
            count += 1;
        }
        
        return count;
    }
    
    const groups = [];
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            const groupSize = findGroup(i);
            groups.push(groupSize);
        }
    }
    
    if (groups.length < 2) {
        return 0;
    }
    
    groups.sort((a, b) => b - a);
    
    return groups[0] * groups[1];
}

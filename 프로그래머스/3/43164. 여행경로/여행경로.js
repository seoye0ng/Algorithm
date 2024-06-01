function solution(tickets) {
    // 그래프 초기화
    let graph = {};
    for (let [from, to] of tickets) {
        if (!graph[from]) {
            graph[from] = [];
        }
        graph[from].push(to);
    }
    
    // 알파벳 순서로 정렬
    for (let from in graph) {
        graph[from].sort();
    }
    
    let result = [];
    let stack = ["ICN"];
    
    while (stack.length) {
        let top = stack[stack.length - 1];
        // 더 이상 갈 곳이 없는 경우 결과에 추가
        if (!graph[top] || graph[top].length === 0) {
            result.push(stack.pop());
        } else {
            // 다음 목적지를 스택에 추가
            stack.push(graph[top].shift());
        }
    }
    
    // 결과를 역순으로 반환
    return result.reverse();
}
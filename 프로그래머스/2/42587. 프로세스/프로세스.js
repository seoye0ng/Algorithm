function solution(priorities, location) {
    let queue = priorities.map((priority, idx) => ({priority, idx}));
    let answer = 0;

    while (queue.length > 0) {
        let current = queue.shift();
        // 현재 프로세스의 우선순위가 더 높은 프로세스가 있는지 확인
        if (queue.some(process => process.priority > current.priority)) {
            queue.push(current);
        } else {
            answer++;
            if (current.idx === location) {
                break; // 찾고자 하는 프로세스가 실행될 때까지 반복
            }
        }
    }

    return answer;
}
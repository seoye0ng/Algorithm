function solution(x, y, n) {
    const queue = [[y, 0]]; 
    
    while (queue.length > 0) {
        const [current, count] = queue.shift();
        
        if (current === x) {
            return count;
        }
        
        // 2로 나누어 떨어질 때 값을 큐에 저장
        if(current % 2 === 0 && current / 2 >= x) {
            queue.push([current/2, count + 1]);
        }
        // 3로 나누어 떨어질 때 값을 큐에 저장
        if(current % 3 === 0 && current / 3 >= x) {
            queue.push([current / 3, count + 1]);
        }
        // n값을 빼도 x보다 크거나, 같을 경우만 큐에 저장
        if(current - n >= x) {
            queue.push([current - n, count + 1]);
        }
    }
    
    return -1;
}

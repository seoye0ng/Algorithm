function solution(operations) {
    let queue = [];

    for (let operation of operations) {
        let [command, num] = operation.split(' ');
        num = Number(num);

        if (command === 'I') {
            queue.push(num);
        } else if (command === 'D' && queue.length > 0) {
            if (num === 1) {
                queue.splice(queue.indexOf(Math.max(...queue)), 1);
            } else if (num === -1) {
                queue.splice(queue.indexOf(Math.min(...queue)), 1);
            }
        }
    }

    return queue.length === 0 ? [0, 0] : [Math.max(...queue), Math.min(...queue)];
}
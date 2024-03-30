function solution(operations) {
    let answer = [];
    const queue = [];
    
    for(let i = 0; i < operations.length; i++) {
        let [command, num] = operations[i].split(' ');
        num = parseInt(num);
        
        if(command === 'I') {
            queue.push(num);
        } else if(command === 'D' && queue.length > 0){
            if(num === -1) {
                queue.sort((a, b) => b - a);
            } else if(num === 1) {
                queue.sort((a, b) => a - b);
            }
            queue.pop();
        }
    }
    
    return queue.length === 0 ? [0, 0] : [Math.max(...queue), Math.min(...queue)];
}
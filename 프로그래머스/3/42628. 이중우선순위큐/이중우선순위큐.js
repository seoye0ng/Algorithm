function solution(operations) {
    const queue = [];
    
    for(let i = 0; i < operations.length; i++) {
        let [command, num] = operations[i].split(' ');
        num = parseInt(num);
        
        if(command === 'I') {
            queue.push(num);
        } else if(command === 'D' && queue.length > 0){
            if(num === 1) {
                queue.splice(queue.indexOf(Math.max(...queue)), 1);
            } else if(num === -1) {
                queue.splice(queue.indexOf(Math.min(...queue)), 1);
            }
        }
    }
    
    return queue.length === 0 ? [0, 0] : [Math.max(...queue), Math.min(...queue)];
}
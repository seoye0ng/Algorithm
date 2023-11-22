function solution(queue1, queue2) {
    const maxCount = (queue1.length + queue2.length) * 2;
    let answer = 0;
    let queue1Result = queue1.reduce((total, current) => total + current, 0);
    let queue2Result = queue2.reduce((total, current) => total + current, 0);
    let index1 = 0;
    let index2 = 0; 

    while(answer < maxCount) {
        if(queue1Result === 0 && queue2Result === 0) return -1;
        if(queue1Result > queue2Result) {
            // const num = queue1.shift();
            const num = queue1[index1++];
            queue1Result -= num;
            queue2Result += num;
            queue2.push(num);
        } else if(queue1Result < queue2Result) {
            // const num = queue2.shift();
            const num = queue2[index2++];
            queue2Result -= num;
            queue1Result += num;
            queue1.push(num);
        } else {
            return answer;
        } 
        
        answer++;
    }
    
    return -1;
}
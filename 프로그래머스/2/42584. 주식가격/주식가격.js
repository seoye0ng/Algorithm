function solution(prices) {
    const answer = [];
    for(let i = 0; i < prices.length; i++) {
        let stack = [];
        
        for(let j = i; j < prices.length; j++) {
            if(stack.length === 0) {
                stack = [j, prices[j]];
                // continue;
            } else {
                if(stack[1] > prices[j]) {
                    answer.push(j - stack[0])
                    break;
                }
            }
            
            if(j === prices.length - 1) answer.push(prices.length - 1 - stack[0]);
        }
    }
    
    return answer;
}
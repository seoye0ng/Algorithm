function solution(numbers, target) {
    let answer = 0;
    
    function dfs(num, i) {
        if(i === numbers.length && num === target) {
            answer++;
        }    
        
        if(i < numbers.length) {
            dfs(num + numbers[i], i+1);
            dfs(num - numbers[i], i+1);
        }
    }
    
    dfs(0, 0);
    return answer;
}


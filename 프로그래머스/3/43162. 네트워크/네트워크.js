function solution(n, computers) {
    let answer = 0;
    const check = Array.from({length: n}, (e) => e = false);
    
    for(let i = 0; i < n; i++) {
        if(!check[i]) {
            dfs(i, computers[i]);
            answer++;
        }
    }
    
    function dfs(i, com) {
        check[i] = true;
        
        for(let j = 0; j < n; j++) {
            if(check[j] == false && com[j] === 1) {
                dfs(j, computers[j]);
            }
        }
    } 
    
    return answer;
}
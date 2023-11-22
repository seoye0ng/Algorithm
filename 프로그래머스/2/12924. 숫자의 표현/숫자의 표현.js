function solution(n) {
    let answer = 1;
     
    for(let i = 1; i <= n / 2; i++){
        let total = 0;
        let num = i;
        
        while(n > total){
            total += num;
            num++;
        }
        
        if(total === n) answer++;
    }
    
    return answer;
}
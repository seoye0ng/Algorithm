function solution(n, m) {
    let divisor = [];
    
    for(let i = 0; i <= n; i++){
        if(n % i === 0 && m % i === 0) divisor.push(i) 
    }
    
    return [Math.max(...divisor),  n * m / Math.max(...divisor)];
}
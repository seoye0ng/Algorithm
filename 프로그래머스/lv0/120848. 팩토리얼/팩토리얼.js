function solution(n) {
    let total = 1; // 누적되는 수
    
    for(var i = 1; i <= n; i++) {
       total *= i;
       if(total > n) {
          break
       }
    }
    
    return i - 1;
}
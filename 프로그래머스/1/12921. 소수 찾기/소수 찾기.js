// function solution(n) {
//     if (n < 2) return 0; // 2 미만의 수는 소수가 아님

//     let answer = 1;
    
//     for(let i = 3; i <= n; i += 2){
//         if(isPrime(i)) answer++
//     }
    
//     return answer;
// }

// function isPrime(num){
//     const sqrtNum = Math.sqrt(num);
//     for(let j = 2; j <= sqrtNum; j++){
//         if(num % j === 0) return false
//     }
//     return true
    
// }

function solution(n) {
    const sieve = Array(n + 1).fill(true);
    sieve[0] = sieve[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= n; j += i) {
                sieve[j] = false;
            }
        }
    }

    return sieve.filter((isPrime) => isPrime).length;
}
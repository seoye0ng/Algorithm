function solution(n, k) {
    const conversion = n.toString(k);
    
    return conversion.split('0').filter(num => isPrime(Number(num))).length;
}

function isPrime(num) {
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}
function solution(a, b) {
    let divisor = [];
    
    for(let i = 1; i <= b; i++) {
        if(b % i === 0 && a % i === 0) divisor.push(i)
    }
    
    let temp = b / Math.max(...divisor)
    while (temp % 2 == 0 ) {
        temp /= 2;
    }
    while (temp % 5 == 0 ) {
        temp /= 5;
    }
    return temp === 1 ? 1 : 2 
}
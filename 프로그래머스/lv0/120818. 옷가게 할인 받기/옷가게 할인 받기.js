function solution(price) {
    var answer = 0;
    
    if(price >= 500000){
        answer = price - (0.2 * price)
    } else if(price >= 300000){
        answer = price - (0.1 * price)
    } else if(price >= 100000){
        answer = price - (0.05 * price)
    } else {
        answer = price
    }
    
    return Math.floor(answer);
}
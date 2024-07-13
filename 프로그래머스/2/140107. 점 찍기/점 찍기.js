function solution(k, d) {
    let count = 0;
    
    for (let x = 0; x <= d; x += k) {
        let maxY = Math.floor(Math.sqrt(d * d - x * x));
        count += Math.floor(maxY / k) + 1;
    }

    return count;
}

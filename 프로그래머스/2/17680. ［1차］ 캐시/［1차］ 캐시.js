function solution(cacheSize, cities) {
    const queue = [];
    let answer = 0;
    
    if (cacheSize === 0) return cities.length * 5;
   
    for (const i in cities) {
        const city = cities[i].toUpperCase();
        if(queue.includes(city)){
            queue.splice(queue.indexOf(city), 1);
            answer += 1;
        } else {
            if(queue.length === cacheSize) queue.shift();
            answer += 5;
        }
        queue.push(city);
    }
    
    return answer;
}
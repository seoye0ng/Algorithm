function solution(food) {
    let answer = [0];
    
    for(let i = food.length - 1; i >= 0; i--) {
        const foodAmount = Math.floor(food[i] / 2);
        for(let j = 1; j <= foodAmount; j++) {
            answer.push(i)
            answer.unshift(i)
        }
    }
    
    return answer.join('');
}
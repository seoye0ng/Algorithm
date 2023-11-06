function solution(numbers) {
    let addArr = [];
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            const add = numbers[i] + numbers[j]
            addArr.push(add)
        }
    }
    
    const answer = [...new Set(addArr)]
    
    return answer.sort((a, b) => a - b);
}
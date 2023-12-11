function solution(elements) {
    const answer = new Set();
    const elementsArr = [...elements, ...elements];
    
    for(let i = 0; i < elements.length; i++) {
        for(let j = i + 1; j <= elements.length + i; j++) {
            const slice = elementsArr.slice(i, j);
            let sum = 0;
            for(let num of slice) {
                sum += num;
            }
            answer.add(sum);
        }
    }
    
    return answer.size;
}
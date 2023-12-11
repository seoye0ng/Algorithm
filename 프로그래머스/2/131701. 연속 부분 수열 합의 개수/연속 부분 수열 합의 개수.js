function solution(elements) {
    const answer = new Set();
    const elementsArr = [...elements, ...elements];
    
    for(let i = 0; i < elements.length; i++) {
        for(let j = i + 1; j <= elements.length + i; j++) {
            let sum = 0;
            for(let k = i; k < j; k++) {
                sum += elementsArr[k];
            }
            answer.add(sum);
        }
    }
    
    return answer.size;
}
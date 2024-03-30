function solution(answers) {
    const patterns = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    let answer = [];
    let maxScore = 0;
    
    patterns.forEach((pattern, i) => {
        let score = 0;
        
        answers.forEach((answer, idx) => {
            if(answer === pattern[idx % pattern.length]) {
                score++;
            }
        })
        
        if(score > maxScore) {
            answer = [i + 1];
            maxScore = score;
        } else if(score === maxScore) {
            answer.push(i + 1);
        }
    })
    
    return answer;
}


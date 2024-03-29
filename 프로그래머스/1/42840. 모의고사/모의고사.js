function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    const scores = [0, 0, 0];
    
    answers.forEach((answer, index) => {
        patterns.forEach((pattern, idx) => {
            if (answer === pattern[index % pattern.length]) {
                scores[idx]++;
            }
        });
    });
    
    const maxScore = Math.max(...scores);
    const result = scores.reduce((acc, score, index) => {
        if (score === maxScore) {
            acc.push(index + 1);
        }
        return acc;
    }, []);
    
    return result;
}
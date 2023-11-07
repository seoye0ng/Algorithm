function solution(k, score) {
    const answer = [];
    const highLevelScores = [];
    
    for(let i = 0; i < score.length; i++){
        let minScore = Math.min(...highLevelScores);
        
        if(highLevelScores.length < k){
            highLevelScores.push(score[i]);
        }else {
            if (minScore < score[i]){
                highLevelScores.sort((a, b) => b - a);
                highLevelScores.pop();
                highLevelScores.push(score[i]);
            } 
            
        }
        
        minScore = Math.min(...highLevelScores);    
        
        answer.push(minScore)
    }
    
    return answer;
}
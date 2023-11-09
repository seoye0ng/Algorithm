function solution(k, m, score) {
    let answer = 0;
    const sortScore = score.sort((a, b) => b - a);
    
    for(let i = m; i <= sortScore.length; i += m){
        answer += sortScore[i - 1] * m;
    }
    
    return answer;
}

    

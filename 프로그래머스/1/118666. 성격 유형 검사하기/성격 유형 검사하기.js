function solution(survey, choices) {
    const result = [{'R': 0, 'T': 0},{'C': 0, 'F': 0},{'J': 0, 'M': 0},{'A': 0, 'N': 0}];
    for(let i = 0; i < choices.length; i++){
        if(choices[i] <= 3){
            for(let j = 0; j < result.length; j++){
                if(survey[i][0] in result[j]){
                    if(choices[i] === 1){
                        result[j][survey[i][0]] += 3;
                        break;
                    }
                    if(choices[i] === 2){
                        result[j][survey[i][0]] += 2;
                        break;
                    }
                    if(choices[i] === 3){
                        result[j][survey[i][0]] += 1;
                        break;
                    }
                }
            }
        } else if(choices[i] >= 5){
             for(let j = 0; j < result.length; j++){
                if(survey[i][1] in result[j]){
                    if(choices[i] === 5) {
                        result[j][survey[i][1]] += 1;
                        break;
                    };
                    if(choices[i] === 6){
                        result[j][survey[i][1]] += 2;
                        break;
                    };
                    if(choices[i] === 7) {
                        result[j][survey[i][1]] += 3;
                        break;
                    };                    
                }
            }
        } 
    }
    console.log(result)
    
    const answer = result.map(sub => {
        return Object.keys(sub).reduce((a, b) => sub[a] >= sub[b] ? a : b);
    })
    
    return answer.join('');
}
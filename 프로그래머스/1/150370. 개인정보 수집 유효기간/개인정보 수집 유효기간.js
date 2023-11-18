function solution(today, terms, privacies) {
    const answer = [];
    const termsArr = terms.map(term => term.split(' '));
    const todayArr = today.split('.').map((date) => parseInt(date));
    
    for(let i = 0; i < privacies.length; i++){
        const category = privacies[i].slice(-1);
        const date = privacies[i].slice(0, 10)
        const dateArr = date.split('.').map((date) => parseInt(date));
        
        for(let j = 0; j < termsArr.length; j++){
            if(category === termsArr[j][0]){
                const calc = parseInt(termsArr[j][1]) + dateArr[1];
                if(calc > 12) {
                    dateArr[0] += Math.floor(calc / 12);
                    dateArr[1] = calc % 12;
                    if(dateArr[1] === 0) {
                        dateArr[1] = 12;
                        dateArr[0] -= 1;
                    }
                } else {
                    dateArr[1] = calc;
                }

            }
        }
        
        let isBefore = false;
        for(let j = 0; j < todayArr.length; j++){
            if(todayArr[j] > dateArr[j]){
                isBefore = true;
                break;
            } else if(todayArr[j] < dateArr[j]){
                break;
            }
            if(j === todayArr.length - 1) isBefore = true;
        }
        if(isBefore) answer.push(i+1);
    }
    return answer;
}
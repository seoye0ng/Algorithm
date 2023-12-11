function solution(want, number, discount) {
    let answer = 0;
    const wantObj = {};
    
    want.forEach((food, i) => wantObj[want[i]] = number[i]);
    
    for(let i = 0; i < discount.length - 9; i++) {
        const temp = {...wantObj};
        const slice = discount.slice(i, i + 10);
        
        for(let j = 0; j < slice.length; j++) {
            if(temp[slice[j]] && temp[slice[j]] > 0) {
                temp[slice[j]] -= 1;
                if(j === slice.length - 1) {
                    const check = Object.values(temp).every(value => value === 0);
                    if(check) answer++;
                }
            } else break;
        }
    }
    
    return answer;
}
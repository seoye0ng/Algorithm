function solution(k, tangerine) {
    let answer = 0;
    const tangerineObj = {};
    let temp = 0;
    
    for(let i = 0; i < tangerine.length; i++) {
        if(tangerineObj[tangerine[i]]) tangerineObj[tangerine[i]] += 1;
        else tangerineObj[tangerine[i]] = 1;
    }
    
    const sortedObj = Object.entries(tangerineObj).sort((a, b) => b[1] - a[1]);

    for(let [key, value] of sortedObj) {
        if(temp >= k) break;
        temp += value;
        answer++;
    }
    
    return answer;
}
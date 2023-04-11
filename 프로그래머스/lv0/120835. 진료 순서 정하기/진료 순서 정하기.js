function solution(emergency) {
    let answer = [];
    const arr = [...emergency].sort((a, b) => (b - a));
    
    for(let i in arr) {
        answer.push(arr.indexOf(emergency[i]) + 1)
    }
    
    return  answer;
}
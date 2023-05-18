function solution(score) {
    let answer = [];
    let average = score.map(item => (item[0]+item[1]) / 2)
    
    const arr = [...average].sort((a, b) => (b - a));
    // 숫자가 큰 순서대로 정렬
    for(let i in arr) {
        answer.push(arr.indexOf(average[i]) + 1)
         // 정렬된 값에 해당하는 값을 찾아서 인덱스는 0부터 시작하니까 +1을 해줌
    }
    
    return answer;
}
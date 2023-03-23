function solution(num, k) {
    var answer = [...String(num)].findIndex(i => i == k);
     
    return answer !== -1 ? answer + 1 : answer;
}
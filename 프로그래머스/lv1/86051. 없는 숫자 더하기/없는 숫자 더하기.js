function solution(numbers) {
    let numArr = numbers.sort()
    let answer = 0;
    for(let i = 0; i <= 9; i++){
        if(!numArr.includes(i)) answer += i
    }
    return answer;
}
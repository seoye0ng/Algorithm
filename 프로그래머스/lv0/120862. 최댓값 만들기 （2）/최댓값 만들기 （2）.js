function solution(numbers) {
    const sortArr = numbers.sort((a, b) => b - a);
   
    const answer = sortArr[0] * sortArr[1] > sortArr[sortArr.length - 1] * sortArr[sortArr.length - 2] ? sortArr[0] * sortArr[1] : sortArr[sortArr.length - 1] * sortArr[sortArr.length - 2]
    return answer
}
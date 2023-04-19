function solution(array, n) {
    const arr = array.sort((a,b) => a - b)
    const arrDiffer = arr.map(i => Math.abs(n - i));
    const minNum =  Math.min(...arrDiffer);
    const answerIndex = arrDiffer.indexOf(minNum);
  
    return arr[answerIndex];
}
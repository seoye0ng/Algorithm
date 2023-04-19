function solution(array, n) {
    let arrDiffer = array.sort((a,b) => a - b).map(i => Math.abs(n - i));
    let minNum =  Math.min(...arrDiffer);
    let answerIndex = arrDiffer.indexOf(minNum)
    // let answerIndex = []
//     arrDiffer.map((item, index) => {
//         if(item === minNum) answerIndex.push(array[arrDiffer.indexOf(minNum)])
//     })
    
//     answerIndex.sort((a,b) => a - b)
    return array[answerIndex];
}
function solution(s) {
    var arr = [...s];
   
    const repeatNums = arr.filter((v, i) => arr.indexOf(v) !== i)
    
    return arr.filter(item => !repeatNums.includes(item)).sort().join('');
}
function solution(numlist, n) {
    let numArr = numlist.map((num) => [Math.abs(n - num), num])
    const numArrSort = [...numArr].sort((a, b) =>  a[0] - b[0] || b[1] - a[1]);
    
    return numArrSort.map(num => num[1]);
}
function solution(n) {
    let arr = [];
    
    for(let i = 1; i < 300; i++) {
        if(i % 3 !== 0 && !i.toString().includes('3')) {
            arr.push(i);
        }
    }
    
    return arr[n-1];
}

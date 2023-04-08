function solution(my_string) {
    let arr = my_string.match(/[0-9]+/g);
    
    return arr ? arr.map(i => parseInt(i)).reduce((a,c,i) => a + c, 0) : 0;
}
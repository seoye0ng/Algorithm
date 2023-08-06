function solution(x) {
    const str = x + ""
    let add = 0
    
    for(let i = 0; i < str.length; i++) {
        add += parseInt(str[i])
    }
    
    return x % add === 0 ? true : false;
}
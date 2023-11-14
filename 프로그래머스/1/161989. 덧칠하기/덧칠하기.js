function solution(n, m, section) {
    let tried = 0;
    let maxRange = 0;
    section.forEach(range => {
        if(maxRange < range){
            tried++
            maxRange = range + m - 1
        }
    })
    
    return tried
}
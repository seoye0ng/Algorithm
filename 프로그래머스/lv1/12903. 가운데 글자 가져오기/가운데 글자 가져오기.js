function solution(s) {
    const half = s.length / 2 
    
    if(s.length % 2 === 0){
        return s.slice(half - 1, half + 1)
    } else {
        return s.slice(half, half + 1)
    }
}
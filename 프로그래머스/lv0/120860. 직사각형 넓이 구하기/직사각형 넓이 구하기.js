function solution(dots) {
    const a = Math.max(dots[0][0],dots[1][0],dots[2][0],dots[3][0]) - Math.min(dots[0][0],dots[1][0],dots[2][0],dots[3][0])
    const b = Math.max(dots[0][1],dots[1][1],dots[2][1],dots[3][1]) - Math.min(dots[0][1],dots[1][1],dots[2][1],dots[3][1])
    
    return Math.abs(a * b);
}
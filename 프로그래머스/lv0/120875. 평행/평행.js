function solution(dots) {
    const a = Math.abs(dots[0][1] - dots[1][1]) / Math.abs(dots[0][0] - dots[1][0]) 
    const b = Math.abs(dots[2][1] - dots[3][1]) / Math.abs(dots[2][0] - dots[3][0])
    const c = Math.abs(dots[0][1] - dots[2][1]) / Math.abs(dots[0][0] - dots[2][0])
    const d = Math.abs(dots[1][1] - dots[3][1]) / Math.abs(dots[1][0] - dots[3][0])
    const e = Math.abs(dots[0][1] - dots[3][1]) / Math.abs(dots[0][0] - dots[3][0])
    const f = Math.abs(dots[1][1] - dots[2][1]) / Math.abs(dots[1][0] - dots[2][0])

    return a == b || c == d || e == f ? 1 : 0
}
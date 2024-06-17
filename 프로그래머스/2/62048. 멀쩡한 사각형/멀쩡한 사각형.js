function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function solution(W, H) {
    const totalSquares = W * H;
    const unusableSquares = W + H - gcd(W, H);
    return totalSquares - unusableSquares;
}
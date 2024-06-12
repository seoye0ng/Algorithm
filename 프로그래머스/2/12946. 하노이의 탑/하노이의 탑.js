function solution(n) {
    const moves = [];

    function hanoi(n, from, to, via) {
        if (n === 1) {
            moves.push([from, to]);
        } else {
            hanoi(n - 1, from, via, to);
            moves.push([from, to]);
            hanoi(n - 1, via, to, from);
        }
    }

    hanoi(n, 1, 3, 2);
    return moves;
}

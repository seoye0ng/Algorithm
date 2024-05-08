function solution(n) {
    const triangle = Array.from({ length: n }, () => []);
    let count = 0;
    let x = -1;
    let y = 0;

    for (let i = n; i > 0; i -= 3) {
        // 아래로 내려가기
        for (let j = 0; j < i; j++) {
            triangle[++x][y] = ++count;
        }

        // 옆으로 이동하기
        for (let j = 0; j < i - 1; j++) {
            triangle[x][++y] = ++count;
        }

        // 대각선으로 올라가기
        for (let j = 0; j < i - 2; j++) {
            triangle[--x][--y] = ++count;
        }
    }

    // 2차원 배열을 1차원 배열로 변환하여 반환
    return triangle.flat();
}

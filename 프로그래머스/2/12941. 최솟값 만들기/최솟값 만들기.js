function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    return A.reduce((total, num, i) => total + num * B[i], 0);
}
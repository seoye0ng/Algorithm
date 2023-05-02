function solution(n) {
   return [...String(n)].reduce((a,c) => parseInt(a) + parseInt(c) , 0);
}
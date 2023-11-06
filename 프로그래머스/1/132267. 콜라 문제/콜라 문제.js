function solution(a, b, n) {
    let totalCola = 0;
    let newCola = 0;
    
    while(n >= a){
        newCola = Math.floor(n / a) * b;
        totalCola += newCola;
        n = n % a + newCola; // 남은 빈 병과 새로 받은 콜라를 이용하여 다음 계산
    }
    
    return totalCola;
}

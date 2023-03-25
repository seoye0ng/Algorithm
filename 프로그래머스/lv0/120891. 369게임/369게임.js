function solution(order) {
    var str = String(order).split('');
    let answer = 0;
    
    for(let i = 0; i < str.length; i++) {
        if(str[i] == 3 || str[i] ==6 || str[i] == 9) {
            answer += 1;
        }
    }
    return answer;
}
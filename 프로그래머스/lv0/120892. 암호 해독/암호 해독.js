function solution(cipher, code) {
    var answer = '';
    for(let i = 0; i <= cipher.length; i++){
        if(i == code || i % code == 0) {
            answer += cipher[i - 1];
        }
    }

    return answer.slice(9,answer.length);
}
function solution(babbling) {
    const regex = /^(aya|ye|woo|ma)+$/i; 
    const answer = babbling.filter(word => regex.test(word));
    
    return answer.length;
}
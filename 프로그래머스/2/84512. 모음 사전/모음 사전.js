function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;
    let per = 781; 
    // 5자리수에서 시작할 때, 각 자리수가 바뀔 때마다 증가하는 수 (5^4 + 5^3 + 5^2 + 5^1) + 각 자리수가 바뀔 때마다 증가하는 수의 시작점(1)

    for (let i = 0; i < word.length; i++) {
        answer += vowels.indexOf(word[i]) * per + 1;
        per = (per - 1) / vowels.length; // 다음 자리수로 넘어갈 때, 증가하는 수 조정
    }

    return answer;
}

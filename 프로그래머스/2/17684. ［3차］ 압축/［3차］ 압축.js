function solution(msg) {
    const answer = [];
    const wordMap = new Map();
    let idx = 26; // 초기 사전 크기는 26 (A부터 Z까지)

    // 초기 사전 설정
    for (let i = 1; i <= 26; i++) {
        const code = i + 64; // A부터 Z까지의 아스키 코드 값
        wordMap.set(String.fromCharCode(code), i);
    }
    
    // 입력 문자열을 순회하면서 압축 진행
    for(let i = 0; i < msg.length; i++) {
        let word = msg[i];
        let next = msg[i + 1];

        // 사전에 현재 단어가 존재하는지 확인
        while (wordMap.has(word + next)) {
            i++;
            word += next;
            next = msg[i + 1];
        }

        // 현재 단어에 해당하는 색인 번호 출력
        answer.push(wordMap.get(word));

        // 다음 단어를 사전에 추가하고 색인 번호 부여
        if (next) {
            idx++;
            wordMap.set(word + next, idx);
        }
    }

    return answer;
}

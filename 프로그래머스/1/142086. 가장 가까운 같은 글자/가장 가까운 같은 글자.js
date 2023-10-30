function solution(s) {
    const positions = {}; // 문자별로 등장한 위치를 저장할 객체
    const result = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (positions[char] === undefined) {
            // 해당 문자가 처음 등장했을 때, 이전 등장 위치를 -1로 설정
            result.push(-1);
        } else {
            // 해당 문자가 이미 등장한 경우, 이전 등장 위치를 계산
            result.push(i - positions[char]);
        }
        positions[char] = i; // 현재 위치를 등장 위치로 업데이트
    }

    return result;
}
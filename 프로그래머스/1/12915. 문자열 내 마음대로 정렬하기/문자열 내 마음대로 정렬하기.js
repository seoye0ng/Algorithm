function solution(strings, n) {
    // 각 문자열과 해당 문자열의 n번째 문자를 함께 저장할 배열을 생성
    const stringArr = strings.map((string) => [string, string[n]]);
    
    // 문자열을 n번째 문자를 기준으로 오름차순 정렬
    stringArr.sort((a, b) => {
        if (a[1] !== b[1]) {
            // n번째 문자가 다른 경우, 그 문자를 기준으로 정렬
            return a[1].localeCompare(b[1]);
        } else {
            // n번째 문자가 같은 경우, 원래 문자열을 기준으로 정렬
            return a[0].localeCompare(b[0]);
        }
    });

    // 정렬된 결과에서 원래 문자열만 추출하여 반환
    return stringArr.map((arr) => arr[0]);
}

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


/* localeCompare 사용

** "a"는 "c" 전에 위치하므로 음수 값을 반환
** "a".localeCompare("c"); // -2 혹은 -1 (또는 다른 음수 값)

** 알파벳 순으로 단어 "check"는 "against"보다 뒤에 위치하므로 양수 값을 반환
** "check".localeCompare("against"); // 2 혹은 1 (또는 다른 양수 값)

** "a"와 "a"는 서로 동등하므로 중립 값 0을 반환
** "a".localeCompare("a"); // 0
*/
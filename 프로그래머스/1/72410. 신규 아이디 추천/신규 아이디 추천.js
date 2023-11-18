function solution(new_id) {
    let answer = new_id
        .toLowerCase()
        .replace(/[^a-z0-9.\-_]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .slice(0, 15)
        .padEnd(1, 'a')
        .replace(/^\.|\.$/g, '')

    return answer.padEnd(3, answer[answer.length - 1]);
}
// .replace(/\.{2,}/g, '.'): 연속된 마침표를 하나로 치환
// .replace(/^\.|\.$/g, ''): 문자열의 시작이나 끝에 위치한 마침표를 제거
// .padEnd(1, 'a'): 길이가 0인 경우에는 "a"를 추가
// .slice(0, 15): 길이가 15를 초과하는 경우, 길이 15이상 제거
// .padEnd(3, answer[answer.length - 1]): 길이가 3 미만인 경우, 마지막 문자로 패딩

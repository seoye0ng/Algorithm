function solution(sequence, k) {
    // 시작 인덱스와 끝 인덱스를 나타내는 변수
    let start = 0;
    let end = 0;
    // 현재 부분 수열의 합을 나타내는 변수
    let sum = sequence[0];
    // 최소 길이를 나타내는 변수
    let minLength = Infinity;
    // 결과를 저장할 배열
    let result = [];

    // end가 배열의 끝까지 도달할 때까지 반복
    while (end < sequence.length) {
        // 부분 수열의 합이 k일 때
        if (sum === k) {
            // 현재 부분 수열의 길이를 구함
            const length = end - start + 1;
            // 최소 길이보다 현재 길이가 작으면 결과를 업데이트
            if (length < minLength) {
                minLength = length;
                result = [start, end];
            }
            // 부분 수열의 합에서 가장 왼쪽의 값을 빼고 시작 인덱스를 증가
            sum -= sequence[start++];
        } 
        // 부분 수열의 합이 k보다 작을 때
        else if (sum < k) {
            // 다음 원소를 부분 수열에 추가하고 끝 인덱스를 증가
            sum += sequence[++end];
        } 
        // 부분 수열의 합이 k보다 클 때
        else {
            // 가장 왼쪽의 값을 빼고 시작 인덱스를 증가
            sum -= sequence[start++];
        }
    }

    return result;
}

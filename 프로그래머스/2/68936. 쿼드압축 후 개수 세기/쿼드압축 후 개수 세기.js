function solution(arr) {
    const result = [0, 0]; // 0의 개수와 1의 개수를 담을 배열 초기화
    compress(arr, 0, 0, arr.length, result); // 초기 압축 시작

    return result;
}

function compress(arr, x, y, size, result) {
    if (checkUniform(arr, x, y, size)) { // 해당 영역이 균일한지 확인
        result[arr[x][y]]++; // 해당 숫자의 개수를 증가
        return;
    }

    const newSize = size >> 1; // 비트 연산을 활용하여 크기를 반으로 줄임
    const halfSize = newSize + x; // 반으로 줄인 크기의 중간 지점
    const nextY = y + newSize; // 다음 영역의 시작 y 좌표
    
    // 4분면으로 나누어 재귀적으로 압축 시도
    compress(arr, x, y, newSize, result);
    compress(arr, x, nextY, newSize, result);
    compress(arr, halfSize, y, newSize, result);
    compress(arr, halfSize, nextY, newSize, result);
}

function checkUniform(arr, x, y, size) {
    const standard = arr[x][y]; // 기준이 되는 숫자
    for (let i = x; i < x + size; i++) {
        for (let j = y; j < y + size; j++) {
            if (arr[i][j] !== standard) { // 기준과 다른 숫자가 있으면 균일하지 않음
                return false;
            }
        }
    }
    return true; // 모든 숫자가 같으면 균일함
}

function check(place) {
    const dx = [0, 0, -1, 1, -1, 1, -1, 1];
    const dy = [-1, 1, 0, 0, -1, 1, 1, -1];
    const maxIdx = place.length;
    
    for (let i = 0; i < maxIdx; i++) {
        for (let j = 0; j < maxIdx; j++) {
            if (place[i][j] === 'P') {
                for (let k = 0; k < 8; k++) {
                    let nx = i + dx[k];
                    let ny = j + dy[k];
                    
                    if (nx < 0 || nx >= maxIdx || ny < 0 || ny >= maxIdx) continue;
                    
                    if (k < 4) { // 상하좌우 체크
                        if (place[nx][ny] === 'P') return false;
                    } else { // 대각선 체크
                        if (place[nx][ny] === 'P' && place[i + dx[k-4]][j + dy[k-4]] !== 'X') return false;
                    }
                }
                if (i + 2 < maxIdx && place[i + 1][j] !== 'X' && place[i + 2][j] === 'P') return false; // 세로방향으로 확인
                if (j + 2 < maxIdx && place[i][j + 1] !== 'X' && place[i][j + 2] === 'P') return false; // 가로방향으로 확인
            }
        }
    }
    return true;
}


function solution(places) {
    let answer = [];
    for (let i = 0; i < places.length; i++) {
        check(places[i]) ? answer.push(1) : answer.push(0);
    }
    
    return answer;
}

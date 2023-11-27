function solution(dirs) {
    const visited = new Set();
    let currentPos = [0, 0];

    for (let i = 0; i < dirs.length; i++) {
        const [x, y] = currentPos.slice(); // 현재 위치를 복사
        
        if (dirs[i] === 'U') currentPos[1] += 1;
        else if (dirs[i] === 'D' ) currentPos[1] -= 1;
        else if (dirs[i] === 'L') currentPos[0] -= 1;
        else if (dirs[i] === 'R') currentPos[0] += 1;
        
         // 경계를 넘어가는 경우, 이동하지 않고 다음 명령어로 넘어감
        if (currentPos[0] > 5 || currentPos[0] < -5 || currentPos[1] > 5 || currentPos[1] < -5) {
            if (currentPos[0] > 5) currentPos[0] = 5; // 경계를 넘어가는 경우 처리
            if (currentPos[0] < -5) currentPos[0] = -5;
            if (currentPos[1] > 5) currentPos[1] = 5;
            if (currentPos[1] < -5) currentPos[1] = -5;
            continue;
        }
        
        const newPath = `${x}${y}${currentPos[0]}${currentPos[1]}`;
        const reversePath = `${currentPos[0]}${currentPos[1]}${x}${y}`;
        
        visited.add(newPath);
        visited.add(reversePath);
    }
    console.log(visited)

    return visited.size / 2; // 중복된 좌표 쌍의 반을 반환
}
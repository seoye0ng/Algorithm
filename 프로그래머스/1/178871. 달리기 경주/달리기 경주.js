function solution(players, callings) {
    const playerPositions = {};
    players.forEach((player, index) => {
        playerPositions[player] = index;
    }); // 각 플레이어의 이름을 key로, 그 플레이어의 위치를 value로 저장
    
    for(let i = 0; i < callings.length; i++){
        const index = playerPositions[callings[i]];
        if(index > 0) {
            [players[index - 1], players[index]] = [players[index], players[index - 1]]; // 위치 변경
            playerPositions[players[index - 1]] = index - 1;
            playerPositions[players[index]] = index;
        }
    }
    
    return players;
}

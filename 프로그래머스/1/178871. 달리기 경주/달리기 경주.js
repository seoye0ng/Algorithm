function solution(players, callings) {
    const playerPositions = {};
    players.forEach((player, index) => {
        playerPositions[player] = index;
    }); 
    
    callings.forEach(win => {
        const index = playerPositions[win];
        if(index > 0) {
            [players[index - 1], players[index]] = [players[index], players[index - 1]];
            playerPositions[players[index]] = index;
            playerPositions[players[index - 1]] = index - 1;
        }
    })
        
    return players;
}

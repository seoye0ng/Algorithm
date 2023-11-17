function solution(board, moves) {
    const result = [];
    let count = 0;
    
    for (let i = 0; i < moves.length; i++) {
        const current = moves[i] - 1;
        
        for (let j = 0; j < board.length; j++) {
            if (board[j][current] !== 0) {
                if(result[result.length - 1] === board[j][current]) {
                    result.pop();
                    count += 2;
                } else {
                result.push(board[j][current]);
                }
                board[j][current] = 0;
                break;
            }
        }
    }
    
    return count;
}
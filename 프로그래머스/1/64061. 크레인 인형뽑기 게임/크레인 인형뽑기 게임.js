function solution(board, moves) {
    const result = [];
    
    for (let i = -1; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i] - 1] !== 0) {
                result.push(board[j][moves[i] - 1]);
                board[j][moves[i] - 1] = 0;
                break;
            }
        }
    }
    

    let finalResult = [...result]
    
    for(let i = 0; i < finalResult.length; i++){
        if(finalResult[i] === finalResult[i + 1]){
            finalResult.splice(i, 2);
            i = 0;
        }
    }
    
    return result.length - finalResult.length;
}
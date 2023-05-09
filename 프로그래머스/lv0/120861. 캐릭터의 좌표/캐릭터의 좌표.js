function solution(keyinput, board) {
    let character = [0,0];
    const boardW =  Math.floor(board[0] / 2);
    const boardH =  Math.floor(board[1] / 2);
    
    keyinput.forEach((el) => {
        if(el === 'up' && character[1] < boardH) { 
            character[1] += 1
        } else if(el === 'down' && character[1] > -boardH) {
            character[1] -= 1 
        } else if(el === 'right' && character[0] < boardW){ 
            character[0] += 1
        } else if(el === 'left' && character[0] > -boardW){
            character[0] -= 1 
        } 
        })
    
    return character;
}
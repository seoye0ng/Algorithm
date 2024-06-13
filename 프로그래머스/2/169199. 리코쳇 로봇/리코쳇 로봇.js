function solution(board) {
    const directions = [
        [-1, 0], 
        [1, 0],  
        [0, -1],
        [0, 1]  
    ];
    
    const rows = board.length;
    const cols = board[0].length;
    let start = null;
    let goal = null;
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 'R') start = [r, c];
            if (board[r][c] === 'G') goal = [r, c];
        }
    }
    
    const queue = [[...start, 0]]; 
    const visited = new Set();
    visited.add(start.toString());
    
    while (queue.length) {
        const [r, c, dist] = queue.shift();
        
        if (r === goal[0] && c === goal[1]) return dist;
        
        for (const [dr, dc] of directions) {
            let nr = r;
            let nc = c;
            
            while (nr + dr >= 0 && nr + dr < rows && nc + dc >= 0 && nc + dc < cols && board[nr + dr][nc + dc] !== 'D') {
                nr += dr;
                nc += dc;
            }
            
            if (!visited.has([nr, nc].toString())) {
                visited.add([nr, nc].toString());
                queue.push([nr, nc, dist + 1]);
            }
        }
    }
    
    return -1;
}
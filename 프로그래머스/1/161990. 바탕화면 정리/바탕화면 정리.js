function solution(wallpaper) {
    const position = [];
    for(let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] === '#'){
                position.push([i, j])
            }
        }
    }
    const xPosition = [...position].sort((a, b) => a[0] - b[0])
    const yPosition = [...position].sort((a, b) => a[1] - b[1])
    
    return [xPosition[0][0], yPosition[0][1], xPosition[xPosition.length - 1][0] + 1, yPosition[yPosition.length - 1][1] + 1];
}
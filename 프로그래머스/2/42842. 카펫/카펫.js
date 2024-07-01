// function solution(brown, yellow) {
//     let answer = [];
//     const total = brown + yellow;
     
//     for(let i = 3;  i <= total / 2; i++) {
//         const row = total / i;
//         if(total % i === 0 && row >= i) {
//             if((row - 2) * (i - 2) === yellow) answer.push(row, i);
//         }
//     }
    
//     return answer;
// }

function solution(brown, yellow) {
    const total_tiles = brown + yellow;

    for (let width = 3; width <= total_tiles; width++) {
        if (total_tiles % width === 0) {
            let height = total_tiles / width;
            if (width >= height) {
                let yellow_tiles = (width - 2) * (height - 2);
                if (yellow_tiles === yellow) {
                    return [width, height];
                }
            }
        }
    }
}
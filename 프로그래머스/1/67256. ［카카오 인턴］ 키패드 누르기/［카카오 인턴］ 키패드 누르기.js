// function solution(numbers, hand) {
//     const currentHand = {"L": 10, "R": 12};
    
//     const left = [1, 4, 7, 11];
//     const right = [3, 6, 9, 13];
//     let answer = '';
    
    
//     return answer;
// }

function solution(numbers, hand) {
    const position = {1:[0,0], 2:[0,1], 3:[0,2], 4:[1,0], 5:[1,1], 6:[1,2], 7:[2,0], 8:[2,1], 9:[2,2], 10:[3,0], 0:[3,1], 12:[3,2]};
    let currentHand = {"L": 10, "R": 12};
    let answer = '';

    numbers.forEach(num => {
        if([1,4,7].includes(num)) {
            answer += 'L';
            currentHand['L'] = num;
        } else if([3,6,9].includes(num)) {
            answer += 'R';
            currentHand['R'] = num;
        } else {
            const Ldistance = Math.abs(position[num][0] - position[currentHand['L']][0]) + Math.abs(position[num][1] - position[currentHand['L']][1]);
            const Rdistance = Math.abs(position[num][0] - position[currentHand['R']][0]) + Math.abs(position[num][1] - position[currentHand['R']][1]);
            console.log('Ldistance',Ldistance)
            console.log('Rdistance',Rdistance)
            if(Ldistance < Rdistance || (Ldistance === Rdistance && hand === 'left')) {
                answer += 'L';
                currentHand['L'] = num;
            } else {
                answer += 'R';
                currentHand['R'] = num;
            }
        }
    });

    return answer;
}

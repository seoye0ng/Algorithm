// function solution(food) {
//     let answer = [0];
    
//     for(let i = food.length - 1; i >= 0; i--) {
//         const foodAmount = Math.floor(food[i] / 2);
//         for(let j = 1; j <= foodAmount; j++) {
//             answer.push(i)
//             answer.unshift(i)
//         }
//     }
    
//     return answer.join('');
// }

function solution(food) {
    let halfFood = '';
    for (let i = 1; i < food.length; i++) {
        halfFood += String(i).repeat(Math.floor(food[i] / 2));
    }

    return halfFood + '0' + [...halfFood].reverse().join('');
}

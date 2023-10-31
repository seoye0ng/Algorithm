function solution(array, commands) {
    let answer = [];

    for (let i = 0; i < commands.length; i++) {
        const sliceStart = commands[i][0] - 1;
        const sliceEnd = commands[i][1]; 
        const sliceArr = array.slice(sliceStart, sliceEnd).sort((a, b) => a - b);
        answer.push(sliceArr[commands[i][2] - 1]);
    }

    return answer;
}
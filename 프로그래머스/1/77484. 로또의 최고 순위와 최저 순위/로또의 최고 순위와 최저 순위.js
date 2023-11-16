function solution(lottos, win_nums) {
    const result = {
        6 : 1,
        5 : 2, 
        4 : 3,
        3 : 4,
        2 : 5,
        1 : 6,
        0 : 6
    }
    let matchNum = 0;
    let emptyNum = 0;
    
    lottos.forEach(num => {
        if (win_nums.includes(num)) matchNum++;
        else if (num === 0) emptyNum++;
    })
    
    return [result[matchNum + emptyNum], result[matchNum]];
}
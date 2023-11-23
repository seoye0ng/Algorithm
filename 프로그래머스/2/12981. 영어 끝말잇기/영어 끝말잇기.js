function solution(n, words) {
    let temp = []
    const wordArr = [];
    
    for(let i = 0; i < words.length; i++) {
        if (wordArr.includes(words[i]) || temp[1] !== words[i][0] && i > 0) {
            return [i % n + 1, Math.ceil((i + 1) / n)];
        } else {
            temp = [i, words[i][words[i].length - 1]];
            wordArr.push(words[i]);
        }
    }

    return [0, 0];
}
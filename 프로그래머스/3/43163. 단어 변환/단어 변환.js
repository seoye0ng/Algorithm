function canConvert(begin, word) {
    let diffCount = 0;
    for (let i = 0; i < begin.length; i++) {
        if (begin[i] !== word[i]) {
            diffCount++;
            if (diffCount > 1) return false;
        }
    }
    return diffCount === 1;
}

function solution(begin, target, words) {
    if (!words.includes(target)) return 0;

    const queue = [];
    const visited = new Set();
    queue.push([begin, 0]);

    while (queue.length > 0) {
        const [currentWord, depth] = queue.shift();
        if (currentWord === target) return depth;
        for (const word of words) {
            if (!visited.has(word) && canConvert(currentWord, word)) {
                visited.add(word);
                queue.push([word, depth + 1]);
            }
        }
    }

    return 0;
}
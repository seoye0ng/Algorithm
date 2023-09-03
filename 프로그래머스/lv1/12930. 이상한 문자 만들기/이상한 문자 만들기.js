function solution(s) {
    return s.split(' ').map((word) => {
        let transformedWord = '';
        for (let i in word) {
            transformedWord += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
        }
        return transformedWord;
    }).join(' ');
}
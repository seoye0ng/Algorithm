function solution(babbling) {
    const word =["aya", "ye", "woo", "ma"]
    let answer = 0;

    babbling.forEach(babyWord => {
        let progress = true;
        let beforeWord = '';
        
        while (progress) {
            for (let i = 0; i < word.length; i++) {
                if (babyWord.indexOf(word[i]) === 0) {
                    if (beforeWord !== word[i]) {
                        beforeWord = word[i];
                        babyWord = babyWord.slice(word[i].length);
                        break;
                    } else {
                        progress = false;
                        break;
                    }
                } else {
                    if (i === word.length - 1) {
                        progress = false;
                        break;
                    }
                }
            }
            if (babyWord.length === 0) {
                answer++;
                progress = false;
            }
        }
    })
    
    return answer;
}


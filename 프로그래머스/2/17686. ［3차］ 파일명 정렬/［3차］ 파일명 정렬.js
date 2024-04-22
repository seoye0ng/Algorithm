function splitFilename(filename) {
    const regex = /(\D+)(\d+)(.*)/i;
    const [, head, number, tail] = filename.match(regex);
    return [head.toLowerCase(), parseInt(number), tail.toLowerCase()];
}

function solution(files) {
    return files.sort((a, b) => {
        const [headA, numberA, tailA] = splitFilename(a);
        const [headB, numberB, tailB] = splitFilename(b);
        
        if (headA !== headB) {
            return headA.localeCompare(headB);
        } else {
            return numberA - numberB;
        }
    });
}

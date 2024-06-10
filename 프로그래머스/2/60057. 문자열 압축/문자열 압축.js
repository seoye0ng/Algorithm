function compressString(s, unit) {
    let compressed = [];
    let prev = s.slice(0, unit);
    let count = 1;

    for (let i = unit; i < s.length; i += unit) {
        let curr = s.slice(i, i + unit);
        if (curr === prev) {
            count++;
        } else {
            if (count > 1) {
                compressed.push(count + prev);
            } else {
                compressed.push(prev);
            }
            prev = curr;
            count = 1;
        }
    }

    if (count > 1) {
        compressed.push(count + prev);
    } else {
        compressed.push(prev);
    }

    return compressed.join('');
}

function solution(s) {
    if (s.length === 1) {
        return 1;
    }

    let minLength = Infinity;

    for (let unit = 1; unit <= Math.floor(s.length / 2); unit++) {
        let compressed = compressString(s, unit);
        minLength = Math.min(minLength, compressed.length);
    }

    return minLength;
}
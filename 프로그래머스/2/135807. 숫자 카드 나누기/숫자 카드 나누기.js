function gcd(a, b) {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}

function findGCDofList(arr) {
    return arr.reduce((acc, curr) => gcd(acc, curr));
}

function checkGCD(g, arr) {
    for (let num of arr) {
        if (num % g === 0) {
            return false;
        }
    }
    return true;
}

function solution(arrayA, arrayB) {
    const gcdA = findGCDofList(arrayA);
    const gcdB = findGCDofList(arrayB);
    
    let maxA = 0;

    if (checkGCD(gcdA, arrayB)) {
        maxA = Math.max(maxA, gcdA);
    }
    
    if (checkGCD(gcdB, arrayA)) {
        maxA = Math.max(maxA, gcdB);
    }
    
    return maxA;
}

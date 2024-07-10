function solution(sequence) {
    const n = sequence.length;
    let pulse1 = new Array(n);
    let pulse2 = new Array(n);

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            pulse1[i] = sequence[i];
            pulse2[i] = -sequence[i];
        } else {
            pulse1[i] = -sequence[i];
            pulse2[i] = sequence[i];
        }
    }

    const maxSum = (arr) => {
        let maxEndingHere = arr[0];
        let maxSoFar = arr[0];
        for (let i = 1; i < arr.length; i++) {
            maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }

    return Math.max(maxSum(pulse1), maxSum(pulse2));
}
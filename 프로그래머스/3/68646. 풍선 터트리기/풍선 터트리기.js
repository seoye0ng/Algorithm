function solution(a) {
    const n = a.length;
    if (n <= 2) return n;

    let leftMin = new Array(n);
    let rightMin = new Array(n);

    leftMin[0] = a[0];
    for (let i = 1; i < n; i++) {
        leftMin[i] = Math.min(leftMin[i - 1], a[i]);
    }

    rightMin[n - 1] = a[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMin[i] = Math.min(rightMin[i + 1], a[i]);
    }

    let result = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] <= leftMin[i] || a[i] <= rightMin[i]) {
            result++;
        }
    }

    return result;
}
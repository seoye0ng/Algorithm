function solution(sticker) {
    const n = sticker.length;

    if (n === 1) return sticker[0];
    if (n === 2) return Math.max(sticker[0], sticker[1]);

    // 첫 번째 스티커를 선택하는 경우 (마지막 스티커는 선택 불가)
    let dp1 = Array(n).fill(0);
    dp1[0] = sticker[0];
    dp1[1] = Math.max(sticker[0], sticker[1]);

    for (let i = 2; i < n - 1; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
    }

    // 첫 번째 스티커를 선택하지 않는 경우
    let dp2 = Array(n).fill(0);
    dp2[1] = sticker[1];
    dp2[2] = Math.max(sticker[1], sticker[2]);

    for (let i = 2; i < n; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
    }

    return Math.max(dp1[n - 2], dp2[n - 1]);
}
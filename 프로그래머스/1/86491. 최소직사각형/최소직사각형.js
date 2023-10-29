function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    for (let i = 0; i < sizes.length; i++) {
        let card = sizes[i];
        maxWidth = Math.max(maxWidth, Math.max(card[0], card[1]));
        maxHeight = Math.max(maxHeight, Math.min(card[0], card[1]));
    }

    return maxWidth * maxHeight;
}
function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;

    sizes.forEach(item => {
        const [a, b] = item.sort((a, b) => b - a);
        if (a > maxWidth) maxWidth = a;
        if (b > maxHeight) maxHeight = b;
    });

    return maxWidth * maxHeight;
}


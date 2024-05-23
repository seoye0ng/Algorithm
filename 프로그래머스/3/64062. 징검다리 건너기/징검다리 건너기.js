function solution(stones, k) {
    let left = 1;
    let right = 0;
    for (let stone of stones) {
        if (stone > right) right = stone;
    }
    
    const canCross = (mid) => {
        let skip = 0;
        for (let stone of stones) {
            if (stone - mid < 0) {
                skip += 1;
                if (skip >= k) return false;
            } else {
                skip = 0;
            }
        }
        return true;
    };

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canCross(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}
function solution(k, dungeons) {
    let maxDungeons = 0;

    // 순열을 생성하는 함수
    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            // 순열이 완성되면 해당 순열로 최대 던전 탐험 수를 계산
            let currentFatigue = k;
            let count = 0;
            for (let [required, consumption] of m) {
                if (currentFatigue >= required) {
                    currentFatigue -= consumption;
                    count++;
                } else {
                    break;
                }
            }
            maxDungeons = Math.max(maxDungeons, count);
        } else {
            for (let i = 0; i < arr.length; i++) {
                const curr = arr.slice();
                const next = curr.splice(i, 1);
                permute(curr, m.concat(next));
            }
        }
    };

    // 던전의 모든 순열을 생성하여 최대 탐험 수를 계산
    permute(dungeons);

    return maxDungeons;
}
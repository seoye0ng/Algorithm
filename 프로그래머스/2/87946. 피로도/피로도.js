function solution(k, dungeons) {
    let answer = 0;

    // 순열을 생성하는 함수
    function permute(index) {
        // 순열이 완성된 경우
        if (index === dungeons.length) {
            let currentFatigue = k; // 현재 남은 피로도
            let dungeonCount = 0; // 탐험한 던전 수

            for (let i = 0; i < dungeons.length; i++) {
                const [minFatigue, consumeFatigue] = dungeons[i];

                // 현재 남은 피로도가 해당 던전을 탐험하는 최소 필요 피로도보다 크거나 같으면 탐험 가능
                if (currentFatigue >= minFatigue) {
                    currentFatigue -= consumeFatigue;
                    dungeonCount++;
                } else {
                    break; // 더 이상 던전을 탐험할 수 없음
                }
            }

            // 현재까지의 순열로 얻은 던전 수와 answer 중 큰 값을 선택
            answer = Math.max(answer, dungeonCount);
            return;
        }

        // 순열 생성
        for (let i = index; i < dungeons.length; i++) {
            // 현재 던전과 index 위치의 던전을 교환하여 순열 생성
            [dungeons[i], dungeons[index]] = [dungeons[index], dungeons[i]];
            permute(index + 1);
            [dungeons[i], dungeons[index]] = [dungeons[index], dungeons[i]]; // 원래 상태로 복구
        }
    }

    permute(0); // 순열 생성 시작

    return answer;
}
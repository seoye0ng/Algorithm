function solution(plans) {
    // 시간을 분으로 변환하는 함수
    const timeToMinutes = (time) => {
        const [hh, mm] = time.split(':').map(Number);
        return hh * 60 + mm;
    };

    // 주어진 계획을 시작 시간 기준으로 정렬
    plans.sort((a, b) => timeToMinutes(a[1]) - timeToMinutes(b[1]));

    const result = [];
    const stack = [];

    for (let i = 0; i < plans.length; i++) {
        const [name, start, playtime] = plans[i];
        const startTime = timeToMinutes(start);
        const duration = parseInt(playtime);

        // 다음 과제가 있다면, 현재 과제와 다음 과제의 시작 시간의 차이를 계산
        if (i < plans.length - 1) {
            const nextStartTime = timeToMinutes(plans[i + 1][1]);
            const timeToNext = nextStartTime - startTime;

            if (timeToNext >= duration) {
                // 과제를 다 끝낼 수 있다면
                result.push(name);
                let remainingTime = timeToNext - duration;

                // 남은 시간동안 스택에 있는 과제를 처리
                while (stack.length && remainingTime > 0) {
                    const [pausedName, pausedTime] = stack.pop();
                    if (remainingTime >= pausedTime) {
                        result.push(pausedName);
                        remainingTime -= pausedTime;
                    } else {
                        stack.push([pausedName, pausedTime - remainingTime]);
                        remainingTime = 0;
                    }
                }
            } else {
                // 과제를 끝내지 못하고 중단해야 한다면
                stack.push([name, duration - timeToNext]);
            }
        } else {
            // 마지막 과제인 경우
            result.push(name);

            // 스택에 남아있는 모든 과제를 처리
            while (stack.length) {
                result.push(stack.pop()[0]);
            }
        }
    }

    return result;
}
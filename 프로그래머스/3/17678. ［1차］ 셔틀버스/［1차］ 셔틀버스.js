function solution(n, t, m, timetable) {
    // HH:MM 형식을 분으로 변환하는 함수
    const timeToMinutes = time => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };

    // 분을 HH:MM 형식으로 변환하는 함수
    const minutesToTime = minutes => {
        const hours = String(Math.floor(minutes / 60)).padStart(2, '0');
        const mins = String(minutes % 60).padStart(2, '0');
        return `${hours}:${mins}`;
    };

    // 셔틀의 도착 시간을 계산
    const shuttleTimes = Array.from({ length: n }, (_, i) => 540 + i * t);

    // 크루 도착 시간을 분으로 변환하여 정렬
    const crewTimes = timetable.map(timeToMinutes).sort((a, b) => a - b);

    let lastTime = 0; // 콘이 셔틀을 탈 수 있는 가장 늦은 시간

    let crewIndex = 0;
    for (let shuttle of shuttleTimes) {
        let passengers = 0;
        
        while (passengers < m && crewIndex < crewTimes.length && crewTimes[crewIndex] <= shuttle) {
            lastTime = crewTimes[crewIndex] - 1;
            crewIndex++;
            passengers++;
        }
        
        if (passengers < m) {
            lastTime = shuttle;
        }
    }

    return minutesToTime(lastTime);
}